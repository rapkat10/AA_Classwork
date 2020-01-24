require "action_view"
require "action_view/helpers"
# == Schema Information
#
# Table name: cats
#
#  id          :integer(8)      not null, primary key
#  birth_date  :date            not null
#  color       :string          not null
#  name        :string          not null
#  sex         :string(1)       not null
#  description :text            not null
#  created_at  :datetime        not null
#  updated_at  :datetime        not null
#require 'action_view'
# require 'action_view/helpers'
# include ActionView::Helpers::DateHelper
# time_ago_in_words(Time.now - 60*60*2) + ' ago'

class Cat < ApplicationRecord
    COLORS = %w(white black grey orange)
    def self.colors
        %w(white black grey orange)
    end

    has_many :cat_rental_requests,
        dependent: :destroy,
        foreign_key: :cat_id,
        class_name: :CatRentalRequest

    include ActionView::Helpers::DateHelper 

    validates :birth_date, :color, :name, :sex, :description, presence: true
    validates :color, inclusion: { in: Cat.colors }
    validates :sex, inclusion: { in: %w(M F)}

    def age
        # time_ago_in_words(Time.now.year - self.birth_date.to_time.year)
        Time.now.year - self.birth_date.to_time.year
    end
end



