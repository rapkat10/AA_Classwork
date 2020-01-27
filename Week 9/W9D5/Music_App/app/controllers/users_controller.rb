class UsersController < ApplicationController

    def new
        render :new
    end

    def create
        @user = User.new(user_params)

        if @user.save
            log_in(@user)
            flash[:success] = ["Successfully Created a New User"]
            redirect_to user_url(@user)
        else
            flash.now[:errors] = @user.errors.full_messages
            render :new
        end
    end

    def show
        @user = current_user
        render :show
    end

    private
    def user_params
        params.require(:user).permit(:email, :password)
    end

end
