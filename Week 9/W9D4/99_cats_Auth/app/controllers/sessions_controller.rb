class SessionsController < ApplicationController

    # before_action :

    def new
        render :new #dont forget to add new.html.erb views
    end

    def create
        user = User.find_by_credentials(
        params[:username],
        params[:password]
        )

        if user
            session[:session_token] = user.reset_session_token!
            flash[:success] = "Logged In"
            redirect_to cats_url
        else
            flash[:error] = "Wrong Credentials"
            render :new, status: 401
        end
    end

    def destroy
        current_user.reset_session_token!
        session[:session_token] = nil
        flash[:success] = "Logged Out"
        redirect_to cats_url
    end

end