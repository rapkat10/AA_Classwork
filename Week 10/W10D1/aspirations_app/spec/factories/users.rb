FactoryBot.define do
    factory :user do 
        username { Faker::Internet.username }
        password { 'hunter12' }
    end
end