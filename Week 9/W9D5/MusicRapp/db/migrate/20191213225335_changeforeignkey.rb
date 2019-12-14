class Changeforeignkey < ActiveRecord::Migration[5.2]
  def change
    remove_column :tracks, :band_id
    add_column :tracks, :album_id, :integer, null: false

    add_index :tracks, :album_id
    
  end
end
