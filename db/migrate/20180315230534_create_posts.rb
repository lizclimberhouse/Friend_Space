class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :date
      t.string :body
      t.string :image
      t.string :author

      t.timestamps
    end
  end
end
