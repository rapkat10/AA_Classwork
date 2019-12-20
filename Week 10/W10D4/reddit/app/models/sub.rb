class Sub < Application

    validates :title, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :posts,
        foreign_key: :sub_id,
        class_name: :Post

    

end
