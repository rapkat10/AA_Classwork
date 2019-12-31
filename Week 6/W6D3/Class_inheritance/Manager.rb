require_relative 'Employee.rb'
class Manager < Employee

    attr_reader :name, :title, :salary, :boss, :employees

    def initialize(name, title, salary, boss, *employees)
        super(name, title, salary, boss)
        @employees = *employees
    end

    def bonus(multiplier = 1)
        total_salary = 0

        @employees.each do |employee| 
            total_salary += employee.salary 
            if employee.class == Manager
                total_salary += employee.bonus
            end
        end

        total_salary * multiplier
    end

end

ned = Manager.new('ned', 'founder', 1000000, nil)
darren = Manager.new('darren', 'TA manager', 78000, ned)
shawna = Employee.new('shawna', 'ta', 12000, darren)
david = Employee.new('david', 'ta', 10000, darren)

p ned.bonus(5) # => 500_000
p darren.bonus(4) # => 88_000
p david.bonus(3) # => 30_000