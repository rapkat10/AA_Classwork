class AddusersIdto < ActiveRecord::Migration[5.2]
  def change
    add_column :bands, :user_id, :integer
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
    add_index :bands, :user_id
    #Ex:- add_index("admin_users", "username")
  end
end
