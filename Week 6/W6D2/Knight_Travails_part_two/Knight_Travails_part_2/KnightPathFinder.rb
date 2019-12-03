require_relative '../PolyTreeNode/lib/00_tree_node.rb'

class KnightPathFinder

    attr_reader :starting_pos, :root_node
    POS_COORD = [[2, 1], [2, - 1], [-2,1], [-2, -1], [1, 2], [-1, 2], [1, -2], [-1,-2]]

    def initialize(starting_pos)
        @starting_pos = starting_pos
        @considered_positions = [starting_pos]
    end

    def new_move_positions(pos) 
        selected = KnightPathFinder.valid_moves(pos).select { |move| !@considered_positions.include?(move) }
        selected.each { |new_move| @considered_positions << new_move }
    end

    def build_move_tree
        @root_node = PolyTreeNode.new(starting_pos)
        queue = [root_node]
        until queue.empty?
            el = queue.shift
            move = el.value
            self.new_move_positions(move).each do |next_move|
                new_move = PolyTreeNode.new(next_move)
                el.add_child(new_move)
                queue.push(new_move)
            end
        end
    end

    def self.valid_moves(pos)
        possible_moves = []
        x, y = pos[0], pos[-1]
        POS_COORD.each do |(x_1, y_1)| # 2, 1
            new_move = [x + x_1, y + y_1] # [2, 1]
            possible_moves << new_move if new_move.all? { |coord| coord >= 0 && coord <= 7 }
        end
        possible_moves
    end

    def find_path(end_pos)
        arr = []
        current = @root_node.bfs(end_pos)
        
        while current
            arr << current 
            current = current.parent
        end
        arr.reverse
    end

    # def trace_path_back(path)

    # end

end

kpf = KnightPathFinder.new([0, 0])
p kpf
# p kpf.new_move_positions([0, 0])
kpf.build_move_tree
p kpf.find_path([6, 7]).map(&:value)


