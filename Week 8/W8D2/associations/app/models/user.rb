  # create_table "users", force: :cascade do |t|
  #   t.string "name"
  #   t.datetime "created_at", null: false
  #   t.datetime "updated_at", null: false
  # end

class User < ApplicationRecord
  has_many :enrollments,
    class_name: "Enrollment",
    primary_key: :id,
    foreign_key: :student_id

  has_many :enrolled_courses,
    through: :enrollments,
    source: :course
end

# == Schema Information
#
# Table name: users
#
#  id         :integer(8)      not null, primary key
#  name       :string
#  created_at :datetime        not null
#  updated_at :datetime        not null
#

