require_relative 'Piece.rb'
require 'singleton'

class Nullpiece < Piece
    include Singleton

    def initialize
        @symbol = :_
    end

    def moves

    end

    def symbol

    end

end