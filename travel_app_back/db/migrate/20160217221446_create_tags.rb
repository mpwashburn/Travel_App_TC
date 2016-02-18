class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.text :country
      t.text :state
      t.text :city

      t.timestamps null: false
    end
  end
end
