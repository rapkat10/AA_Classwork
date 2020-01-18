require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    # ...
    if @columns
      return @columns
    end

    columns = DBConnection.execute2(<<-SQL)
      SELECT
        *
      FROM
        #{self.table_name}

    SQL
    @columns = columns.first.map(&:to_sym)

  end

  def self.finalize!
    self.columns.each do |column|
      define_method(column) do
        self.attributes[column]
      end

      define_method("#{column}=") do |val|
        self.attributes[column] = val
      end
    end
  end

  def self.table_name=(new_name)
    # ...
    @table_name = new_name
  end

  def self.table_name
    # ...
    @table_name ||= self.to_s.tableize
  end

  def self.all
    # ...
    all_data = DBConnection.execute(<<-SQL
      SELECT
        *
      FROM
        #{self.table_name}
    SQL
    )
    self.parse_all(all_data)
  end

  def self.parse_all(results)
    # ...
    results.map do |result|
      self.new(result)
    end
  end

  def self.find(id)
    # ...
    results = DBConnection.execute(<<-SQL, id)
      SELECT
        *
      FROM
        #{self.table_name}
      WHERE
        #{self.table_name}.id = ?
    SQL
    
    if results.empty?
      return nil
    else
      # self.parse_all(results).first
      self.new(results.first)
    end
  end

  def initialize(params = {})
    # ...
    params.each do |attr_name, val|
      attr_name = attr_name.to_sym
      if self.class.columns.include?(attr_name)
        self.send("#{attr_name}=", val)
      else
        raise "unknown attribute '#{attr_name}'"
      end
    end
  end

  def attributes
    # ...
    @attributes ||= {}
  end

  def attribute_values
    # ...
    self.attributes.values
  end

  def insert
    # ...
    col_names = self.class.columns.drop(1).map(&:to_s).join(', ')
    n = self.attribute_values.count
    question_marks = (["?"] * n).join(", ") 
    
    DBConnection.execute(<<-SQL, *self.attribute_values)
      INSERT INTO
        #{self.class.table_name} (#{col_names})
      VALUES
        (#{question_marks})
    SQL

    self.id = DBConnection.last_insert_row_id
  end

  def update
    # ...
    question_marks = self.class.columns.drop(1).map do |col|
      col = col.to_s 
      col += " = ?"
    end.join(", ")
    
    values = self.attribute_values.drop(1)
    DBConnection.execute(<<-SQL, *values, self.id)
      UPDATE
        #{self.class.table_name}
      SET
        #{question_marks}
      WHERE
        #{self.class.table_name}.id = ?
    SQL

  end

  def save
    # ...
    if self.id.nil?
      self.insert
    else
      self.update
    end
  end
end
