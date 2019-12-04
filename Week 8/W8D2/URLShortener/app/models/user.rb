
class User < ApplicationRecord

    validates :email, presence: true, uniqueness: true

    has_many :urls,
        class_name: "ShortenedUrl",
        primary_key: :id,
        foreign_key: :user_id

end
# == Schema Information
#
# Table name: users
#
#  id         :integer(8)      not null, primary key
#  email      :string          not null
#  created_at :datetime        not null
#  updated_at :datetime        not null
#

