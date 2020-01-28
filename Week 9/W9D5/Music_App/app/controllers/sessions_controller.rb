class SessionsController < ApplicationController

    def new
      render :new
    end

    def create
      user = User.find_by_credentials(
        params[:user][:email],
        params[:user][:password]
      )

      if user
        log_in(user)
        flash[:success] = ["Welcome Back!"]
        redirect_to user_url(user)
      else
        flash.now[:errors] = ["Invalid Credentials"]
        render :new
      end
    end

    def destroy
      log_out
      redirect_to new_session_url
    end

end