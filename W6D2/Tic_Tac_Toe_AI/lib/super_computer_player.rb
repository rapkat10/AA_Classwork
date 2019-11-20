require_relative 'tic_tac_toe_node'
require 'byebug'
class SuperComputerPlayer < ComputerPlayer

  def move(game, mark)
    
    node = TicTacToeNode.new(game.board, mark)
    
    node.children.each do |child| 
      return child.prev_move_pos if node.winning_node?(mark)
    end
    # debugger
    node.children.each do |child| 
      return child.prev_move_pos if !node.losing_node?(mark)
    end
    raise "error"
  end

end

if __FILE__ == $PROGRAM_NAME
  puts "Play the brilliant computer!"
  hp = HumanPlayer.new("Jeff")
  cp = SuperComputerPlayer.new

  TicTacToe.new(hp, cp).run
end
