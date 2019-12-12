class User < AplicationRecord

    validates :user_name, :session_token, presence: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token

    
    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save! 
        self.session_token 
    end

    def password=(password)
        
    end

    def is_password?

    end

    def self.find_by_credentials(user_name, password)

    end


    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    private

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

end