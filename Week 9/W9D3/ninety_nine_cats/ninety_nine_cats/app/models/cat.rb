# require 'action_view'
class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper

    COLORS = ['Red', 'Black', 'Brown', 'Orange', 'White', 'Grey'] 

    validates :name, :birth_date, presence: true
    validates :sex, inclusion: ['M', 'F'] 
    validates :color, inclusion: COLORS 


    def age
        time_ago_in_words(birth_date)
    end

end 