# require_relative 'Manager.rb'

class Employee

    attr_reader :name, :title, :salary, :boss

    def initialize(name, title, salary, boss_inst)
        @name = name
        @title = title
        @salary = salary
        @boss = boss_inst
        add_boss if @boss.class == Manager
    end

    def bonus(multiplier)
      @salary * multiplier
    end

    private

    def add_boss
        @boss.employees << self
    end
end