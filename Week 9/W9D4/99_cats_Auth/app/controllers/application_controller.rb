class ApplicationController < ActionController::Base

    # skip_before_action :verify_authenticity_token

    helper_method :current_user, :logged_in?

    def logged_in?
        !!current_user
    end

    def current_user
        return nil unless session[:session_token]
        User.find_by(session_token: session[:session_token])
    end

    def ensure_user_logged_in
        unless logged_in?
            flash[:error] = "You must Log in first"
            redirect_to new_session_url
        end
    end

end
