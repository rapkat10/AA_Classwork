require 'rails_helper'

RSpec.describe User, type: :model do


    let!(:user2) { create(:user) }

    describe "validates presence of username" do
        it { should validate_presence_of(:username) }
    end

    describe "validates presence of password_digest" do
        it { should validate_presence_of(:password_digest) }
    end
    
    describe "validates presence of session_token" do
        it { should validate_presence_of(:session_token) }
    end

    describe "Users can check for matching password" do
        it "checks is_password?" do
            expect(user2.is_password?('hunter12')).to be true
            # expect(FactoryBot.create(:user).is_pass)
            # # expect(FactoryBot.build(:cat)).to be_valid
        end
    end

    describe "uniqueness of username" do
        it { should validate_uniqueness_of(:username) }
    end

    describe "uniqueness of session_token" do
        it { should validate_uniqueness_of(:session_token) }
    end

    describe "has many goals" do
        # it { should have_many(:goals) }
        it "should have many goals"
    end

    describe ":: find_by_credentials" do
        describe "with valid values" do
            it "should return the user" do
                expect(User.find_by_credentials(user2.username, 'hunter12')).to eq(user2)
            end
        end

        describe "with in-valid values" do
            it "returns nil" do
                expect(User.find_by_credentials('NEVERGONNAFINDTHIS', 'hunter12')).to eq(nil)
            end
        end

    end
    
end