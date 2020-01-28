class Changecolumn < ActiveRecord::Migration[5.2]
  def change

    add_column :bands, :user_id, :integer
    add_index :bands, :user_id
    add_index :bands, :name, unique: true

    remove_column :albums, :live, :boolean
    add_column :albums, :live, :boolean, default: true, null: false
    add_index :albums, :title, unique: true

  end
end
