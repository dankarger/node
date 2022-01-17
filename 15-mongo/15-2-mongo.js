
//display all restaurants:
'db.restaurants.find()'
// all restaurant that have a specific cuisine
'db.restaurants.find({cuisineType:"vegeterian"})'
// all kosher restaurants
'db.restaurants.find({isKosher: true})'
// display only spcific cities restaurants
'db.restaurants.find({"address.city":"Jerusalem"})'
// display specific restaurant address
'db.restaurants.find({name:"Flyburger"}, {"address":1})'
// display only coords of spec restaurants address
'db.restaurants.find({name:"Flyburger"}, {"address.coords":1})'
// display restaurants in an ascending order by name
'db.restaurants.find().sort({name:1})'
// Write a MongoDb query that should display all restaurants in ascending order by city names.
'db.restaurants.find().sort({"address.city":1})'
// Update a specific restaurant's name
'db.restaurants.updateOne({name:"Hatzilim"}, {$set:{name:"Hatzilim 2000"}})'
// Update a specific restaurant by adding a new review.
'db.restaurants.updateOne({name:"Hatzilim 2000"}, {$push:{reviews:{score:5, review:"I wanted baked eggplants instead of fried and they threw me out",date:"1.1.18"}}})'
// Update all restaurants to be kosher
'db.restaurants.updateMany({ },{$set: {isKosher: true}})'
// Delete a specific restaurant
'db.restaurants.deleteOne({name:"Hatzilim 2000"})'
// Delete all restaurant
'db.restaurant.deleteMany({ })'
// Write a MongoDb query to print all restaurant names
'db.restaurants.find().forEach(function(rest) {print("name: " + rest.name);})'
// Write a MongoDb query to print all restaurant cities
'db.restaurants.find().forEach(function(rest) {print("city: " + rest.address.city);})'
// Write a MongoDb query to print all restaurant coordinates
'db.restaurants.find().forEach(function(rest) {print("city: " + rest.address.coords);})

//delete one
'db.restaurant.deleteOne({name:"test2"})'


//for each
'db.restaurant.find().forEach( function(myDoc) { print( "city:" + myDoc.city ); } );'
'db.restaurant.find().forEach( function(myDoc) { print( "name:" + myDoc.name ); } );'


// find with regex
'db.restaurant.find({name:/^it/})'

// find numbers of collections matching querry
'db.restaurant.find({name:/^it/}).count()'

