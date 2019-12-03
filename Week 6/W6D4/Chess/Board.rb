require_relative 'Nullpiece.rb'
require_relative 'Piece.rb'
require 'byebug'
require_relative 'Rook.rb'

class Board

    attr_accessor :rows # not sure?

    def initialize
        @sentinel = :_ # Nullpiece.instance
        @rows = create_rows
    end

    def [](*pos)
        row, col = pos
        self.rows[row][col]
    end
    
    def []=(*pos, val)
        row, col = pos
        self.rows[row][col] = val
    end

    def move_piece(start_pos, end_pos)
        # debugger
        # current_piece = @rows[*start_pos]
        if self[*start_pos] == @sentinel
            raise "Not valid start position"
        elsif self[*start_pos] == self[*end_pos]
            raise "Not a valid end position"
        else
            self[*end_pos] = self[*start_pos] 
            self[*start_pos] = @sentinel
        end
    end

    def valid_pos?(pos)

    end

    def add_piece(piece, pos)
        @rows[pos] = piece
    end

    def checkmate?(color)

    end

    def in_check?(color)

    end

    def find_king(color)

    end

    def pieces

    end

    def dup

    end

    def move_piece!(color, start_pos, end_pos)

    end

    private

    def create_rows
        new_board = Array.new(8) { Array.new(8) { @sentinel } }
        # rook = [[0, 0], [7, 0], [0, 7], [7, 7]]
        # # knight = [[0, 1], [0, 6], [7, 1], [7, 6]]
        # # bishop = [[0, 2], [0, 5], [7, 2], [7, 5]]
        # # king = [[0, 4], [7, 4]]
        # # queen = [[0, 3], [7, 3]]
        # # pawn = [[1, 0], [1, 1], [1, 2], [1, 3, [1, 4], [1, 5], [1, 6], [1, 7],[6, 0], [6, 1], [6, 2], [6, 3, [6, 4], [6, 5], [6, 6], [6, 7]]
        # rook.each do |pos|
        #     add_piece(Rook.new(:white, self, [row, col]).symbol, pos)
        # end

        (0..7).each do |row|
            (0..7).each do |col|
                if row < 2 
                    new_board[row][col] = Rook.new(:white, self, [row, col]).symbol
                elsif row > 5
                    new_board[row][col] = Rook.new(:black, self, [row, col]).symbol
                end
            end
        end
        new_board
    end

end

