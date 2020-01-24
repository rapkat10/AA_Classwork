# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

c1 = Cat.create(name: "Fluffy", birth_date: "2000/01/01", color: "grey", sex: "M", description: "blah")
Cat.create(name: "Snowball", birth_date: "2001/01/01", color: "black", sex: "F", description: "blah")
Cat.create(name: "Lazy", birth_date: "2010/01/01", color: "white", sex: "M", description: "blah")

CatRentalRequest.create(cat_id: c1.id, start_date: "2020/01/01", end_date: "2020/01/10", status: "PENDING")
CatRentalRequest.create(cat_id: c1.id, start_date: "2020/01/11", end_date: "2020/01/15", status: "PENDING")
CatRentalRequest.create(cat_id: c1.id, start_date: "2020/01/20", end_date: "2020/01/25", status: "PENDING")
CatRentalRequest.create(cat_id: c1.id, start_date: "2020/01/26", end_date: "2020/01/20", status: "PENDING")