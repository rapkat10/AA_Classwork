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
    # ...
    class_name.constantize
  end

  def table_name
    # ...
    self.model_class.table_name
  end
end

class BelongsToOptions < AssocOptions
  def initialize(name, options = {}) #human => human_id belongs_to :owner
    # ...
    @primary_key = options[:primary_key] || :id
    @class_name = options[:class_name] || name.to_s.camelcase.singularize #camelize.singularize
    @foreign_key = options[:foreign_key] || "#{name}_id".to_sym
  end
end

class HasManyOptions < AssocOptions
  def initialize(name, self_class_name, options = {})
    # ...
    @primary_key = options[:primary_key] || :id
    @class_name = options[:class_name] || name.to_s.camelcase.singularize #camelize.singularize
    @foreign_key = options[:foreign_key] || "#{self_class_name.to_s.underscore}_id".to_sym
  end
end

module Associatable
  # Phase IIIb
  def belongs_to(name, options = {})
    # ...
    associated_options = BelongsToOptions.new(name, options)
    assoc_options[name] = associated_options
    define_method(name)do
      for_key = self.send(associated_options.foreign_key)
      associated_options.model_class.where(associated_options.primary_key => for_key).first
    end
  end

  def has_many(name, options = {})
    # ...
    associated_options = HasManyOptions.new(name, self, options)
    define_method(name)do
      pri_key = self.send(associated_options.primary_key)
      associated_options.model_class.where(associated_options.foreign_key => pri_key)
    end
  end

  def assoc_options
    # Wait to implement this in Phase IVa. Modify `belongs_to`, too.
    @assoc_options ||= {}
  end
end

class SQLObject
  # Mixin Associatable here...
  extend Associatable
end
