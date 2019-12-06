require_relative 'db_connection'
require_relative '01_sql_object'

module Searchable
  def where(params)

    column_names = ""
    params.keys.each do |col|
      column_names += "#{col} = ?"
      column_names += " AND " unless params.keys.last == col
    end

    table = DBConnection.execute(<<-SQL, *params.values)
      SELECT
        *
      FROM 
        #{table_name}
      WHERE
        #{column_names}
    SQL
    table.map { |row| self.new(row)}
  end
end

class SQLObject
  # Mixin Searchable here...
  extend Searchable
end
