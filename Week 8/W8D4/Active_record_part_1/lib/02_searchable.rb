require_relative 'db_connection'
require_relative '01_sql_object'

module Searchable
  def where(params)

    values = ""
    if params.is_a?(Array)
      values += params
    else
      params.each do |key, value|
        values += "#{key} = #{value}" if value.is_a?(Integer)
        values += "#{key} = '#{value}'" if value.is_a?(String)
        values += " AND " unless params.keys.last == key
      end
    end

    DBConnection.execute(<<-SQL
    SELECT
      * 
    FROM
      "#{self.table_name}"
    WHERE
      #{values}
    SQL
    ).map { |row| self.new(row)}
  end
end

class SQLObject
  extend Searchable
end
