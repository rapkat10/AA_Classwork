class User < ApplicationRecord
    attr_reader :password
    after_initialize :ensure_session_token

    validates :username, :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }


    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if BCrypt::Password.new(user.password_digest).is_password?(password)
            return user
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
  
    def reset_session_token
        original_token = self.session_token
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save
        self.session_token
    end

    def ensure_session_token
        # reset_session_token unless self.session_token 
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

end
