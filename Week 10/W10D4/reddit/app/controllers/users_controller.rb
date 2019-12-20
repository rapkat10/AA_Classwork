class UsersController < ApplicationController
    def new
        render :new
    end

    def create
        @user = User.new(user_params)

        if @user.save
            log_in(@user)
            flash[:success] = "Welcome"
            redirect_to subs_url  # not sure of the url!!! 
        else
            flash[:errors] = @user.errors.full_messages
            render :new
        end

    end

    def user_params
        params.require(:user).permit(:username, :password)
    end

end
