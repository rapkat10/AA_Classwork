  # create_table "enrollments", force: :cascade do |t|
  #   t.integer "course_id"
  #   t.integer "student_id"
  #   t.datetime "created_at", null: false
  #   t.datetime "updated_at", null: false
  # end


class Enrollment < ApplicationRecord
    belongs_to :user,
      class_name: 'User',
      foreign_key: :student_id,
      primary_key: :id

    belongs_to :course,
        class_name: 'Course',
        primary_key: :id,
        foreign_key: :course_id
end

# == Schema Information
#
# Table name: enrollments
#
#  id         :integer(8)      not null, primary key
#  course_id  :integer
#  student_id :integer
#  created_at :datetime        not null
#  updated_at :datetime        not null
#

