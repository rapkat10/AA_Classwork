# require_relative 'Piece'
# require_relative 'Stepable'

# class King < Piece
#     include Stepable

#     def initialize
#         @symbol = :K # this is a guess!
#     end

#     protected

#     def move_diffs
#         # Not sure what to do yet!

#     end
# end




# require_relative 'Piece'
# require_relative 'Slidable'

# class King < Piece
#     include Slidable

#     def initialize
#         @symbol = :R # this is a guess!
#     end

#     protected

#     def move_diffs
#         # Not sure what to do yet!

#     end
# end





require_relative 'Piece'
require_relative 'Stepable'

class King < Piece
    include Stepable

    attr_reader :symbol
    def initialize(color, board, pos)
        @color = color
        @symbol = @color == :black ? :♚ : :♔ # this is a guess!
        super
    end

    protected

    def move_diffs
        # Not sure what to do yet!
        horizontal_dirs + diagonal_dirs
    end
end