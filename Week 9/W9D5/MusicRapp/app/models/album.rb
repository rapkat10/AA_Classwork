
# == Schema Information
#
# Table name: albums
#
#  id         :integer(8)      not null, primary key
#  title      :string          not null
#  year       :integer(4)      not null
#  created_at :datetime        not null
#  updated_at :datetime        not null
#  band_id    :integer(4)      not null
#  studio     :boolean         default("true"), not null
#


class Album < ApplicationRecord

    validates :title, :year, :band_id, presence: true
    validates :studio, inclusion: [true, false]

    belongs_to :band,
        foreign_key: :band_id,
        class_name: :Band

    has_many :tracks,
       foreign_key: :album_id,
       class_name: :Track

    after_initialize :set_live

    def set_live
        self.studio ? true : false
    end
    
end


