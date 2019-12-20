class PostsController < ApplicationController

    def new

    end

    def show

    end

    def create

    end

    def edit

    end

    def update

    end

    def destroy

    end


    def post_params
        params.require(:post).permit(:title, :url,:content)
    end

end
