Rails.application.routes.draw do
  resources :users, only: [:new, :create, :show]

  resource :session, only: [:new, :create, :destroy]

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end