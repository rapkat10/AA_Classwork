require_relative 'Piece'
require_relative 'Stepable'

class Knight < Piece
    include Stepable

    attr_reader :symbol
    def initialize(color, board, pos)
        @color = color
        @symbol = @color == :black ? :♞ : :♘ # this is a guess!
        super
    end
    protected

    def move_diffs
        # Not sure what to do yet!

    end
end


