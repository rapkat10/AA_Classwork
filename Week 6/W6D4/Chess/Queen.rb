# require_relative 'Piece'
# require_relative 'Slidable'

# class Queen < Piece
#     include Slidable

#     def initialize
#         @symbol = :Q # this is a guess!
#     end

#     protected

#     def move_dirs
#         # Not sure what to do yet!

#     end
# end



require_relative 'Piece'
require_relative 'Slidable'

class Queen < Piece
    include Slidable

    attr_reader :symbol
    def initialize(color, board, pos)
        @color = color
        @symbol = @color == :black ? :♛ : :♕ # this is a guess!
        super
    end

    protected

    def move_dirs
        # Not sure what to do yet!
        horizontal_dirs + diagonal_dirs
    end
end