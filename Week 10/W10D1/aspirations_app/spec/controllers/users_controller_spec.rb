require 'rails_helper'

RSpec.describe UsersController, type: :controller do

    let!(:user1) { create(:user) }
    let!(:user2) { create(:user) }

    describe 'Get #index' do
        it 'renders the users #index and sets @users to all users' do
            get :index
            expect(response).to render_template(:index)
            all_users = controller.instance_variable_get(:@users)
            expect(all_users).to eq(User.all)
        end
    end

    describe 'Get #new' do
        it 'renders the new template and sets @user to an instance of user' do
            get :new
            expect(response).to render_template(:new)
            user = controller.instance_variable_get(:@user)
            expect(user.instance_of?(User)).to be true
        end
    end

    describe 'Get #show' do
        it 'renders the show template and sets @user to the specified user' do
            get :show, params: {id: user1.id}
            expect(response).to render_template(:show)
            user = controller.instance_variable_get(:@user)
            expect(user).to eq(user1)
        end
    end


    describe 'Post #create' do
        context 'with valid params' do
            it 'creates a user in the database and redirects to users show page' 
        end

        context 'with in-valid params' do
            it 'doesn''t create a user in the database and renders the new template' 
        end
    end
    
    describe 'Get #edit' do
        it 'renders the edit template' do
            get :edit, params: {id: user1.id}
            expect(response).to render_template(:edit)
        end

        it 'sets @user to a specified user' do
            get :edit, params: {id: user1.id}
            user = controller.instance_variable_get(:@user)
            expect(user).to eq(user1)
        end
    end

    describe 'Put #update' do
        context 'with valid params' do
            it 'updates the user in the database and redirects to users show page' do
                put :update, params: {id: user1.id, user: {username: 'rick', password: 'hunter12' }}
                expect(User.find(user1.id).username).to eq('rick')
                expect(response).to redirect_to(user_url(user1.id))
            end
        end

        context 'with in-valid params' do
            it 'doesn''t update the database and renders the edit template' 
        end
        
    end

    describe 'Delete #destroy' do
        it 'something'
    end


end