class Band < ApplicationRecord

    validates :name, presence: true, uniqueness: true

    belongs_to :user

    has_many :albums, dependent: :destroy

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

