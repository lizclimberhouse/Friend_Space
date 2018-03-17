class Api::FriendsController < ApplicationController
  before_action :authenticate_user!

  def my_friends
    render json: User.liked(current_user.liked_friends)
  end
  
  def index
    render json: User.random_friend(current_user.liked_friends)
  end

  def show
  end

  def create
  end

  def update
    current_user.liked_friends << params[:id].to_i
    current_user.save
  end

  def destroy
  end
end
