require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  subject(:user) do
    create(:user)
  end

  describe "GET #new" do
    it "renders the new template" do
      get :new
      expect(response).to render_template(:new)
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "should log user in and redirect to user's #show page" do
        # post :create, params: { user: { username: user.username, password: user.password } }
        post :create, params: { user: { username: "Testing", password: "hunter12" } }
        expect(User.exists?(username: "Testing")).to be true
        expect(User.find_by(session_token: session[:session_token])).to eq(User.find_by(username: 'Testing'))
        expect(response).to redirect_to(user_url(User.find_by(username: 'Testing').id))
      end
    end

    context "with invalid params" do
      it "should NOT log the user in and render the new template" do
        post :create, params: {user: { username: "", password: "" }}
        expect(User.exists?(username: "")).to be false
        expect(User.find_by(session_token: session[:session_token])).not_to eq(user)
        expect(response).to render_template(:new)
      end
    end
  end

  describe "GET #show" do
    it "should set @user variable to the user corresponding to the passed params and renders the show template" do 
        get :show, params: {id: user.id}
        expect(controller.instance_variable_get(:@user)).to eq(user)
        expect(response).to render_template(:show)
    end
  end


end
