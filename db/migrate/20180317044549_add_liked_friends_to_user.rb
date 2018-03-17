class AddLikedFriendsToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :liked_friends, :text
  end
end
