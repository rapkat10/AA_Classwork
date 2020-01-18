require_relative '02_searchable'
require 'active_support/inflector'

# Phase IIIa
class AssocOptions
  attr_accessor(
    :foreign_key,
    :class_name,
    :primary_key
  )

  def model_class
    self.class_name.to_s.constantize
  end

  def table_name
    "#{self.class_name}s".downcase
  end
end

class BelongsToOptions < AssocOptions
  def initialize(name, options = {})
    @foreign_key = options[:foreign_key] || "#{name}_id".to_sym
    @primary_key = options[:primary_key] || :id
    @class_name = options[:class_name] || name.to_s.capitalize    
  end
end

class HasManyOptions < AssocOptions
  def initialize(name, self_class_name, options = {})
    @foreign_key = options[:foreign_key] || "#{self_class_name}_id".downcase.to_sym
    @primary_key = options[:primary_key] || :id
    @class_name = options[:class_name] || name.to_s.capitalize.singularize    
  end  
end

module Associatable
  # Phase IIIb
  def belongs_to(name, options = {})
    options = BelongsToOptions.new(name, options)

    define_method(name) do
      foreign = self.send(options.foreign_key)
      return nil unless foreign
      options.model_class.where({options.primary_key => foreign}).first
    end
    assoc_options[name] = options
  end

  def has_many(name, options = {})
  options = HasManyOptions.new(name, self, options)

    define_method(name) do
      options.model_class.where({options.foreign_key => self.id})
    end

  end

  def assoc_options
    @assoc_options ||= {}
  end
end

class SQLObject
  extend Associatable
end
