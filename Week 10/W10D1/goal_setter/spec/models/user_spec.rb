require 'rails_helper'

RSpec.describe User, type: :model do

  describe "validates presence of attributes" do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
  end

  it "finds user by credentials" do
    expect(User).to respond_to :find_by_credentials
    user = User.create!(username: "Tom", password: "123456")
    # debugger
    expect(User.find_by_credentials("Tom", "123456")).to eq(user)

  end

end
