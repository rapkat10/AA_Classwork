require_relative 'Nullpiece.rb'
require_relative 'Piece.rb'

class Board

    def initialize
        @rows = Array.new(8) { Array.new(8) { Nullpiece.new } }
    end

end

board = Board.new
p board