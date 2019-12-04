require 'securerandom'

class ShortenedUrl < ApplicationRecord

    validates :short_url, presence: true, uniqueness: true

    belongs_to :user,
        class_name: "User",
        primary_key: :id,
        foreign_key: :user_id

    def self.random_code
        
    end

end

# == Schema Information
#
# Table name: shortened_urls
#
#  id         :integer(8)      not null, primary key
#  short_url  :string
#  long_url   :string
#  user_id    :integer(4)
#  created_at :datetime        not null
#  updated_at :datetime        not null
#

