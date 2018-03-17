class CreateFriends < ActiveRecord::Migration[5.1]
  def change
    create_table :friends do |t|
      t.string :name
      t.string :quote
      t.string :picture
      t.string :city

      t.timestamps
    end
  end
end
