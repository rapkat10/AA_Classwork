require 'tdd'
require 'rspec'

describe "Array" do
    describe "#my_uniq" do
        let(:arr) { [1, 2, 1, 3, 3] }

        it "returns unique elements" do
            expect(arr.my_uniq).to eq(arr.uniq)
        end
    end

    describe "#two_sum" do
        let(:arr) { [-1, 0, 2, -2, 1] }

        it "returns indices of pairs that sum to zero" do
            expect(arr.two_sum).to eq([[0, 4], [2, 3]])
        end
    end

    describe "#my_transpose" do
        let(:arr) { [[0, 1, 2], [3, 4, 5], [6, 7, 8]] }

        it "makes the columns rows" do
            expect(arr.my_transpose).to eq(arr.transpose)
        end
    end
end

describe "stock_picker" do
    let(:prices) { [50, 60, 10, 20] }
    let(:pair) { [10, 20] }
    it "does not modify original array" do
        expect(stock_picker(prices)).not_to be(prices)
    end

    it "returns most profitable pair" do
        expect(stock_picker(prices)).to eq(pair)
    end
end