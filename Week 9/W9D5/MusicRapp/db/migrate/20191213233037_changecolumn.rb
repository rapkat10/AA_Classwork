class Changecolumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :albums, :band_id

    add_column :albums, :band_id, :integer, null: false

    add_column :albums, :studio, :boolean, default: true, null: false
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
