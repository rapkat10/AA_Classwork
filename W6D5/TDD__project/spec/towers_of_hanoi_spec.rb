require 'rspec'
require 'towers_of_hanoi'

describe "TowersOfHanoi" do 
    describe "move" do
        subject(:game) { TowersOfHanoi.new }
        let(:start_pile) { 0 }
        let(:end_pile) { 2 }

        before (:each) { game.move(start_pile, end_pile) } 

        it "only moves a disk from the top of the pile" do
            expect(game.board[start_pile].length).to be < 4
        end

        it "can move a disk to an empty pile" do 
            expect(game.board[end_pile]).to eq([1])
        end

        it "doesn't place a larger disk on top" do
            game.move(start_pile, end_pile)
            expect(game.board[end_pile]).to eq([1])
        end
    end

    describe "won?" do
        subject(:game) { TowersOfHanoi.new }
        before (:each) { game.board = [[], [], [1, 2, 3, 4]] }
        it "checks if original pile is in a new array" do
            expect(game.won?).to eq(true)
        end
    end
end