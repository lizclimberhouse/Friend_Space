# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
25.times do
  title = Faker::Hacker.ingverb
  Post.create(
    title: title,
    date: Faker::Date.between(2.days.ago, Date.today),
    body: Faker::Hacker.say_something_smart,
    image: Faker::Avatar.image(title, '50x50', 'png', 'set2'),
    author: Faker::Name.name,
  )
end

# 15.times do
#   name = Faker::Name.name
#   Friend.create(
#     name: name,
#     quote: Faker::Hacker.say_something_smart,
#     picture: Faker::Avatar.image(name, '50x50', 'png', 'set1'),
#     city: Faker::Address.city,
#   )
# end

x = 0
10.times do 
  x += 1
  name = Faker::Name.name
  user = User.create(
    name: name,
    picture: Faker::Avatar.image(name, '50x50', 'png', 'set1'),
    email: "test#{x}@test.com",
    password: 'password',
    city: Faker::Address.city,
    quote: Faker::Hacker.say_something_smart,
  )
  # 5.times do 
  #   Post.create(
  #   body: Faker::StarWars.quote, 
  #   user_id: user.id,
  #   )
 
end