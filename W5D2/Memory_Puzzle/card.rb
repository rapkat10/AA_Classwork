
class Card

    attr_accessor :flipped, :symbol

    def initialize(symbol) 
        @symbol = symbol
        @flipped = false
    end

    def reveal
        self.flipped = true
    end

    def hide
        self.flipped = false
    end


end