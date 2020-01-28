class Track < ApplicationRecord

    validates :title, :ord, :lyrics, :album_id, presence: true
    
    belongs_to :album

end

# == Schema Information
#
# Table name: tracks
#
#  id         :integer(8)      not null, primary key
#  title      :string          not null
#  ord        :integer(4)      not null
#  lyrics     :text            not null
#  album_id   :integer(4)      not null
#  created_at :datetime        not null
#  updated_at :datetime        not null
#

