class ApplicationController < ActionController::Base

    helper_method :current_user

    def current_user 
        # they checked if there is a session[:session_token]
        # find_by the session_token
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end



end
