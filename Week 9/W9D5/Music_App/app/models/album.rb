class Album < ApplicationRecord

    validates :title, :year, :band_id, presence: true

    belongs_to :band

    has_many :tracks, dependent: :destroy

    before_validation :set_live

    def set_live
        self.live ? true : false
    end

end

# == Schema Information
#
# Table name: albums
#
#  id         :integer(8)      not null, primary key
#  title      :string          not null
#  year       :integer(4)      not null
#  band_id    :integer(4)      not null
#  created_at :datetime        not null
#  updated_at :datetime        not null
#  live       :boolean         default("true"), not null
#

