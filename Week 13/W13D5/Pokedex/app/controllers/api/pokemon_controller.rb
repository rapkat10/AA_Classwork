class Api::PokemonController < ApplicationController

    def index
        
    end

    def show
        
    end

    def create

    end

    private
    def pokemon_params
      params.require("pokemon").permit(:name, :attack, :defense, :poke_type)
    end

end
