class TowersOfHanoi
    attr_accessor :board

    def initialize
        @board = [[1, 2, 3, 4], [], []]  
    end

    def move(start_pile, end_pile)
        disk = @board[start_pile].shift
        if @board[end_pile].empty?
            @board[end_pile].unshift(disk)
        else
            @board[end_pile].unshift(disk) if @board[end_pile].all? { | ele | ele > disk }
        end
    end

    def won?
        @board[1].length == 4 || @board[2].length == 4
    end   

    def play
        until won?
            p @board
            puts "Enter the index of a starting pile"
            start = gets.chomp.to_i
            puts "Enter the index of a ending pile"
            ending = gets.chomp.to_i
            move(start, ending)
        end
    end
end

game = TowersOfHanoi.new
game.play