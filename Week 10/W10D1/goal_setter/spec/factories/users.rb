FactoryBot.define do
  factory :user do
    username { Faker::Name.name }
    password { Faker::Alphanumeric.alpha(number: 10) }
  end
  # factory :username do

  # end
end
