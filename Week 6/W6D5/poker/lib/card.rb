class Card
    attr_reader :value, :color, :symbol, :flipped

    def initialize(value, symbol) #color, symbol)
        @value = value
        # @color = color
        @symbol = symbol
        @flipped = false
    end

    def toggle
        @flipped = !(@flipped)
    end
end
