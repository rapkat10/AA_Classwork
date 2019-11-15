require_relative "./board.rb"
require_relative "./card.rb"
require_relative "./humanplayer.rb"
require_relative "./computerplayer.rb"

#computer is not complete but players is 100% working
class Game
    attr_reader :board
    attr_accessor :current, :players

    def initialize
        @board = Board.new
        @players = []
        @current = players.first
        # self.prepare
    end

    def switch_turn
        self.players.rotate!
        self.current
    end

    def current
        self.current = players.first
    end

    def prepare
        self.board.random_card
        self.board.reveal_all
        self.board.hide_all
        self.board.prints
        puts "Enter number of players: "
        num_players = gets.chomp.to_i
        num_players.times do
            puts "Is this player a computer?"
            input = gets.chomp
            if input == "yes"
                self.players << Computer.new
            else
                puts "Enter player name: "
                name = gets.chomp
                self.players << Player.new(name)
            end
        end
        
        
        self.run
    end

    def play
 
        puts "#{self.current.name} enter a position: "
        pos_1 = gets.chomp.split(" ").map(&:to_i)
        self.board[pos_1].reveal
        self.board.prints
        puts "#{self.current.name} enter your second position: "
        pos_2 = gets.chomp.split(" ").map(&:to_i)
        self.board[pos_2].reveal
        if self.board[pos_1].symbol == self.board[pos_2].symbol
            self.board.prints
            self.current.num_matches += 1
        else
            self.board.prints
            sleep(4)
            system "clear"
            self.board[pos_1].hide 
            self.board[pos_2].hide 
            self.board.prints
        end
        self.switch_turn
        self.board.win?
        
    end

    def run 
        until self.play

        end
    end


end