class Api::UsersController < ApplicationController
  before_action :authenticate_user!
  def index
    render json: User.all.where("id != ?", current_user.id) 
  end

  def my_friends
    render json: User.liked(current_user.liked_friends)
  end

  def edit_profile
    if current_user.update(user_params)
      render json: current_user
    else
      render json: @user.errors, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render json: @user 
  end

  def update
    current_user.liked_friends << params[:id].to_i 
    current_user.save 
  end 

  private
    def user_params
      params.require(:user).permit(:name, :quote, :picture, :city)
    end
end
