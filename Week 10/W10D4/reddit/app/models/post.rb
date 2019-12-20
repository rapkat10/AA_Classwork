# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  url        :string
#  content    :text
#  user_id    :integer
#  sub_id     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord

    validates :title, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :sub,
        foreign_key: :sub_id,
        class_name: :Sub

    has_many :comments,
        foreign_key: :post_id,
        class_name: :Comment

end
