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
    Post.create(
      title: Faker::Hacker.ingverb,
      date: Faker::Date.between(2.days.ago, Date.today),
      body: Faker::Hacker.say_something_smart,
      image: Faker::Avatar.image(name, '50x50', 'png', 'set1'),
      author: name,
    )
  end
end

puts "seeded"

