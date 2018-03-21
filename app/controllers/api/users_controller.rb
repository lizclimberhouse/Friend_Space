class Api::UsersController < ApplicationController
  before_action :authenticate_user!
  def index
    render json: User.all.where("id != ?", current_user.id)
    # render json: User.without_user(current_user).paginate
    # TODO how to return an array of something ex for something. ruby docs or
    # if else 
  end

  def my_friends
    render json: User.liked(current_user.liked_friends)
  end

  def edit_profile
    render json: current_user
  end

  def show
    @user = User.find(params[:id])
    render json: @user 
  end

  # def editUser
  #   if @user.update(user_params)
  #     render json: @user
  #   else
  #     render json: @user.errors, status: 422
  #   end
  # end

  def update
    current_user.liked_friends << params[:id].to_i 
    current_user.save 
  end 

  # private
  #   def user_params
  #     params.require(:user).permit(:name, :quote, :picture, :city)
  #   end
end
