class Api::PostsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_post, only: [:show, :update, :destroy]

  def index
    render json: Post.all.order(created_at: :desc)
  end

  def show
    render json: @post
  end

  def create
    post = Post.new(post_params)

    if post.save
      render json: post
    else
      render json: post.errors, status: 422
    end
  end

  def update
    if @post.upate(post_params)
      render json: @post
    else
      render json: @post.errors, status: 422
    end
  end

  def destroy
    @post.destroy
  end

  private
    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:title, :date, :body, :image, :author)
    end
end
