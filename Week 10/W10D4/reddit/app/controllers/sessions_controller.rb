class SessionsController < ApplicationController

    def new
        render :new
    end

    def create
        user = User.find_by_credentials(
            params[:username],
            params[:password]
        )

        if user
            session[:session_token] = user.reset_session_token
        else
            flash[:errors] = "Incorrect Credentials"
            render :new
        end

    end

    def destroy
        log_out
        redirect_to new_session_url
    end

end
