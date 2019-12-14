class TracksController < ApplicationController

    before_action :require_user!

    def show
        @track = Track.find(params[:id])
        render :show
    end

    def new
        @album = Album.find(params[:album_id])
        @track = Track.new(album_id: params[:album_id])
        render :new
    end

    def create
        @track = Track.new(track_params)
        if @track.save
            redirect_to track_url(@track)
        else
            @album = @track.album
            flash.now[:errors] = @track.errors.full_messages
            render :new
        end
    end

    def edit
        @track = Track.find(params[:id])
        render :edit
    end

    def update
        @track = current_user.tracks.find(params[:id])
        if @track.update_attributes(track_params)
            redirect_to track_url(@track)
        else
            flash.now[:errors] = @track.errors.full_messages
            render :edit
        end
    end

    private

    def track_params
        params.require(:track).permit(:title, :album_id, :lyrics, :ord)
    end
end