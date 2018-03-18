class AddQuoteToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :quote, :text
  end
end
