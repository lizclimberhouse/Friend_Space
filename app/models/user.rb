class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  # has_many :posts

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  serialize :liked_friends, Array

  def self.liked(ids)
    ids = ids.empty? ? [0] : ids
    User.where("id IN (?)", ids)
  end

  def self.random_friend(ids)
    ids = ids.empty? ? [0] : ids
    User.where("id NOT IN (?)", ids).order("RANDOM()")
  end
end
