class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.string :title
      t.date :date

      t.timestamps null: false
    end
  end
end
