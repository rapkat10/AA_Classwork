

class Piece

    attr_reader :color

    def initialize(color, board, pos)
        @color = color # @color should = symbol, maybe :black/:white
        @board = board # Instance of Board class
        @pos = pos # should be an array, probably [1, 2]

    end

    def to_s

    end

    def empty?

    end

    def valid_moves

    end

    def pos=(val)

    end

    def symbol

    end

    private

    def move_into_check?(end_pos)

    end
    

end
