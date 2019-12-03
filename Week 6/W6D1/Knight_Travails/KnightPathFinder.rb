require_relative '../skeleton/lib/00_tree_node.rb'

class KnightPathFinder

    attr_reader :starting_pos, :root_node
    def initialize(starting_pos)
        @starting_pos = starting_pos
        @root_node = PolyTreeNode.new(starting_pos)
        @considered_positions = [starting_pos]
    end

    def new_move_positions(pos)
        unless @considered_positions.include?(pos)
            @considered_positions << pos if self.valid_moves(pos) 
            return pos
        end
    end

    def build_move_tree

    end

    def self.valid_moves(pos)
        x, y = pos[0], pos[-1]
        if (x > 0 && x <= 8) && (y > 0 && <= 8)
            return true
        end
        false
    end
    # pos_coord = [[2, 1], [2, - 1], [-2,1], [-2, -1],[1, 2], [-1, 2] [1, -2][-1,-2]]
end

kvf = KnightPathFinder.new([0, 0])
p kvf
p kvf.root_node