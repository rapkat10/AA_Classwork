class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    user = User.find_by_credentials(params[:username], params[:password])
    # this is cheking if user is found!, if it is we will log them in
    if user
      session[:session_token] = user.reset_session_token!
      flash[:success] = "Logged in Successfully!"
      redirect_to cats_url
    else
      flash[:errors] = "username/password incorrect!"
      render :new, status: 401
    end

  end

  def destroy
    if current_user
      current_user.reset_session_token!
    end
    session[:session_token] = nil
    redirect_to cats_url
  end
end
