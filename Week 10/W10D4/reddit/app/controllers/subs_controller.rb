class SubsController < ApplicationController

    def index
        @subs = Sub.all
        render :index
    end

    def show
        #the subs#show can list posts

    end

    def new

    end

    def create

    end

    def edit

    end

    def update

    end

    def destroy

    end

end
