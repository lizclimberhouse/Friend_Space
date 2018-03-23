


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
  5.times do
    user.posts.create(
      title: Faker::Hacker.ingverb,
      date: Faker::Date.between(2.days.ago, Date.today),
      body: Faker::Hacker.say_something_smart,
      image: Faker::Avatar.image(name, '50x50', 'png', 'set1'),
      author: name,
    )
  end
end

puts "seeded"

# 10.times do |x|
#   x += 1
#   user = User.create(
#     name: Faker::Name.name,
#     role: ['player', 'coach', 'league_manager'].sample,
#     email: "test#{x}@test.com",
#     password: 'password'
#   )
#   5.times do
#     user.scorecards.create(
#     one_pointer: [0, 1].sample,
#     two_pointer: [0, 2].sample,
#     three_pointer: [0, 3].sample,
#     fouls: rand(1..5),
#     assists: rand(1..5),
#     rebounds: rand(1..5),
#     steals: rand(1..5),
#     active: [true, false].sample,
#     game_id: rand(1..5)
#   )
#   end
# end

