# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  password_digest :string           not null
#  session_token   :string           not null
#  user_name       :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_session_token  (session_token) UNIQUE
#  index_users_on_user_name      (user_name) UNIQUE
#

class User < ApplicationRecord

    validates :user_name, :session_token, presence: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token

    attr_reader :password

    has_one :catrentalrequest,
        foreign_key: :user_id,
        class_name: :CatRentalRequest
    
    has_many :cats,
        foreign_key: :user_id,
        class_name: :Cat

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save! 
        self.session_token 
    end

    def password=(password) 
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        bcrypt_password = BCrypt::Password.new(self.password_digest)
        bcrypt_password.is_password?(password)
    end

    def self.find_by_credentials(user_name, password)
        user = User.find_by(user_name: user_name)
        return nil unless user && user.is_password?(password)
        user
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    private

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

end
