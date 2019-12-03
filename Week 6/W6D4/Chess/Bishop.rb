require_relative 'Piece'
require_relative 'Slidable'

class Bishop < Piece
    include Slidable

    attr_reader :symbol
    def initialize(color, board, pos)
        @color = color
        @symbol = @color == :black ? :♝ : :♗ # this is a guess!
        super
    end

    protected

    def move_dirs
        # Not sure what to do yet!

    end
end