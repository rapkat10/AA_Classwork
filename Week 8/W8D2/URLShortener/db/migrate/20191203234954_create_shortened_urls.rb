class CreateShortenedUrls < ActiveRecord::Migration[6.0]
  def change
    create_table :shortened_urls do |t|
      t.string :short_url
      t.string :long_url, unique: true
      t.integer :user_id

      t.timestamps

    end
  end
end
