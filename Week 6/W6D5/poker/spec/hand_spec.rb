require 'rspec'
require 'hand'

describe "hand" do
    subject (:hand) { Hand.new }
    let(:card) { double("card", value: 1, symbol: :D) }
    let(:j) { double("j", value: :J, symbol: :J) }
    let(:two) { double("two", value: 2, symbol: :H) }
    let(:three) { double("three", value: 3, symbol: :H) }
    let(:four) { double("four", value: 4, symbol: :H) }
    let(:five) { double("five", value: 5, symbol: :H) }
    let(:six) { double("six", value: 6, symbol: :H) }

    describe "initialize" do
        it "creates an empty array" do
            expect(hand.set).to be_empty
        end
    end

    describe "add_card" do 
        it "adds a card to the set" do
            hand.add_card(card)
            expect(hand.set).to include(card)
        end
    end

    describe "remove_card" do
        it "removes a card from the set" do
            hand.add_card(card)
            expect(hand.set).to include(card)
            hand.remove_card(card)
            expect(hand.set).not_to include(card)
        end
    end

    describe "reveal_hand" do
        it "reveals all cards in the hand" do
            expect(hand.set).to all(card.flipped == true)
        end
    end

    describe "has_one_pair?" do
        it "returns true if there is 1 pair in the hand" do
            2.times { hand.add_card(two) }
            3.times { hand.add_card(three) }
            expect(hand.has_one_pair?).to eq(true)
        end
    end

    describe "has_two_pair?" do
        it "returns true if there are 2 pairs in the hand" do
            4.times { hand.add_card(two) }
            hand.add_card(three)
            expect(hand.has_two_pair?).to eq(true)
        end
    end

    describe "five_of_a_kind?" do
        it "returns true if there is five_of_a_kind in the hand" do
            4.times { hand.add_card(two) }
            hand.add_card(j)
            expect(hand.five_of_a_kind?).to eq(true)
        end
    end

    

    # describe "calculating_kinds" do
    #     it "checks x amount of kinds" do
    #         4.times { hand.add_card(card) }
    #         hand.add_card(j)
    #         expect(hand.set).to eq(5)
    #     end

    #     it "checks x amount of kinds" do
    #         4.times { hand.add_card(card) }
    #         hand.add_card(two)
    #         expect(hand.set).to eq(4)
    #     end
    # end

    # describe "calculating_pairs" do
    #     it "checks number of pairs" do
    #         2.times { hand.add_card(card) }
    #         2.times { hand.add_card(two) }
    #         hand.add_card(j)
    #         expect(hand.set).to eq(2)
    #     end
    # end

    # describe "calculating_flush" do
    #     it "determines if a hand is a full house or straight flush" do
    #         hand.add_card(two)
    #         hand.add_card(three)
    #         hand.add_card(four)
    #         hand.add_card(five)
    #         hand.add_card(six)
    #         expect(hand.set).to eq("flush")
    #     end
    # end

    describe "hand_comparison" do
    end
end