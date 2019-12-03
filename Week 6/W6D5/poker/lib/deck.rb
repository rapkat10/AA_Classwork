require_relative 'card'

class Deck
    attr_reader :pile

    def initialize 
        @pile = make_pile
    end

    def make_pile
        new_arr = []
        symbols = [:H, :D, :C, :S]
        values = [:A, :J, :Q, :K, 2, 3, 4, 5, 6, 7, 8, 9 , 10]
        symbols.each do |symbol|
            values.each do |val|
                new_arr << Card.new(val, symbol)
            end
        end
        2.times { new_arr << Card.new(:JK, :JK) }
        new_arr
    end
end

# d = Deck.new
# p d.pile