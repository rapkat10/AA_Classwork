class UsersController < ApplicationController

    def new
        @user = User.new
        render :new # make sure to add new.html.erb in the views

    end

    def create
        @user = User.new(user_params)

        if @user.save
            session[:session_token] = @user.session_token
            flash[:success] = "Welcome to 99 cats!"
            redirect_to cats_url
        else
            render :new, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:user_name, :password)
    end

end