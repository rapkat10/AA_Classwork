class Addindextotracks < ActiveRecord::Migration[5.2]
  def change
    remove_column :tracks, :lyrics

    add_column :tracks, :lyrics, :text, null: false
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")

    add_index :tracks, :ord, unique: true
  
  end
end
