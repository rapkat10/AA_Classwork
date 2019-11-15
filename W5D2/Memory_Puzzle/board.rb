require_relative "./card.rb"

class Board

    attr_accessor :grid
    def initialize
        @grid = Array.new(4) { Array.new(4) }

    end

    def random_card
        symbols = ('a'..'z').to_a
        8.times do 
            symbol = symbols.sample 
            symbols.delete(symbol)
            2.times do
                pos = valid_positions.sample
                self[pos] = Card.new(symbol)
            end
        end
    end

    def valid_positions
        arr = []
        self.grid.each_with_index do |subarr, row|
            subarr.each_with_index do |ele, col|
                arr << [row, col] if ele == nil
            end
        end
        arr
    end

    def [](position)
        row, col = position
        self.grid[row][col]
    end

    def []=(position, card)
        row, col = position
        self.grid[row][col] = card
    end

    def prints
        self.grid.each_with_index do |subArr, row|
            subArr.each_with_index do |card, col|
                card.flipped ? (print "#{card.symbol} ") : (print "_ ")
            end
            puts 
        end
        nil
    end

    def reveal_all
        self.grid.each_with_index do |subarr, row|
            subarr.each_with_index do |card, col|
                card.reveal
            end
        end
        self.prints
        sleep(6)
        system "clear"
    end

    def hide_all
        self.grid.each_with_index do |subarr, row|
            subarr.each_with_index do |card, col|
                card.hide
            end
        end
    end

    def win?
        count = 0
        self.grid.each do |subArr|
            subArr.each do |card|
                count += 1 if card.flipped
            end
        end
        count == 16
    end
    

end

