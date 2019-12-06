require_relative 'db_connection'
require 'active_support/inflector'

# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject 
  def self.columns

    return @column if @column

    table = DBConnection.execute2(<<-SQL
      SELECT
        *
      FROM
        "#{self.table_name}"
      LIMIT
        1
    SQL
    )
    @column = table.first.map { |column| :"#{column}"}

  end

  def self.finalize!
    self.columns.each do |col|
      define_method(col) {self.attributes[col]}
      define_method("#{col}=") {|val| self.attributes[col] = val}
    end
  end

  def self.table_name=(table_name)
    instance_variable_set("@table_name", table_name)
  end

  def self.table_name
    @table_name ||= "#{self}".downcase + "s"
  end

  def self.all
    DBConnection.execute(<<-SQL
      SELECT
        *
      FROM
        "#{self.table_name}"
    SQL
    ).map { |row| self.new(row)}

  end

  def self.parse_all(results)
    results.map { |row| self.new(row)}
  end

  def self.find(id)
    found = DBConnection.execute(<<-SQL, id)
      SELECT
        *
      FROM
        "#{self.table_name}"
      WHERE
       "id" = ?
    SQL
    found.empty? ? nil : self.new(found.first)
  end

  def initialize(params = {})
    params.each do |att, value|
      raise "unknown attribute '#{att}'" unless self.class.columns.include?(att.to_sym)
      self.send("#{att}=", value)
    end
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
    @attributes.values
  end

  def insert

    id = self.class.all.count + 1
    str = "?"
    self.attribute_values.length.times { str += ", ?" }

    DBConnection.execute(<<-SQL, id, *self.attribute_values)
    INSERT INTO
      "#{self.class.table_name}"
    VALUES
      (#{str})
    SQL

    self.id = id
  end

  def update
    column_names = self.class.columns
    values = ""
    id = self.id
    column_names.each do |col|
      values += "#{col} = ?"
      values += ", " unless column_names.last == col
    end
    
    DBConnection.execute(<<-SQL, *self.attribute_values, id)
    UPDATE
      #{self.class.table_name}
    SET
      #{values}
    WHERE
      :id = id
    SQL
  end

  def save
    if self.id 
      self.update
    else
      self.insert
    end
  end
end