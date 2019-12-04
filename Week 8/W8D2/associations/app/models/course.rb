  # create_table "courses", force: :cascade do |t|
  #   t.string "name"
  #   t.integer "prereq_id"
  #   t.integer "instructor_id"
  #   t.datetime "created_at", null: false
  #   t.datetime "updated_at", null: false
  # end


class Course < ApplicationRecord
  
    has_many :enrollments,
        class_name: "Enrollment",
        primary_key: :id,
        foreign_key: :course_id

    has_many :enrolled_students,
        through: :enrollments,
        source: :user

    belongs_to :prereq,
      class_name: "Course",
      primary_key: :id,
      foreign_key: :prereq_id

    belongs_to :instructor,
        class_name: "User",
        primary_key: :id,
        foreign_key: :instructor_id
end

# == Schema Information
#
# Table name: courses
#
#  id            :integer(8)      not null, primary key
#  name          :string
#  prereq_id     :integer
#  instructor_id :integer
#  created_at    :datetime        not null
#  updated_at    :datetime        not null
#

