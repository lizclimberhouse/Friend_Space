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

15.times do
  Friend.create(
    name:
    oneline:
    picture:
    
  )