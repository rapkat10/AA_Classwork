require 'rspec'
require 'card'

describe "Card" do
    subject(:card) { Card.new(:Q, :diamond) }
    describe "#initialize" do
        it "sets a value" do
            expect(card.value).to eq(:Q)
        end
        # it "sets a color" do
        #     expect(card.color).to eq(:red)
        # end
        it "sets a symbol" do
            expect(card.symbol).to eq(:diamond)
        end
    end

    describe "#toggle" do
        it "toggles the flipped instance variable" do
            card.toggle
            expect(card.flipped).to eq(true)
        end
    end
end