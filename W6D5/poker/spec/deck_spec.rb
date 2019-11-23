require "rspec"
require "deck"

describe "Deck" do
    subject(:deck) { Deck.new }

    describe "#initialize" do
        it "sets a pile" do
            expect(deck.pile).to be_a(Array)
        end
    end

    describe "#make_pile" do
        it "create a deck of 54 cards" do
            deck.make_pile
            expect(deck.pile.length).to eq(54)
        end
    end
end