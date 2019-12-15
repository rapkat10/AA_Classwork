class Band < ApplicationRecord

    validates :name, presence: true, uniqueness: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :albums,
        foreign_key: :band_id,
        class_name: :Album

    has_many :tracks,
        through: :albums,
        source: :tracks

    
end



# == Schema Information
#
# Table name: bands
#
#  id         :integer(8)      not null, primary key
#  name       :string          not null
#  created_at :datetime        not null
#  updated_at :datetime        not null
#  user_id    :integer(4)
#

