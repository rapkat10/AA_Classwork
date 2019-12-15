
class Track < ApplicationRecord

    validates :title, :ord, :lyrics, presence: true

    belongs_to :album,
        foreign_key: :album_id,
        class_name: :Album

    has_one :band,
        through: :album,
        source: :band

end




# == Schema Information
#
# Table name: tracks
#
#  id         :integer(8)      not null, primary key
#  title      :string          not null
#  ord        :integer(4)      not null
#  created_at :datetime        not null
#  updated_at :datetime        not null
#  album_id   :integer(4)      not null
#  lyrics     :text            not null
#

