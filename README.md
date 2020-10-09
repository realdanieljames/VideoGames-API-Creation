Homework- VideoGames API Creation
// VideoGames API Creation

//Using postman and Node, create a videogames API
// use .env for your port number
// .gitignore file should ignore your node modules folder and your .env folder
// use morgan middleware

// create a models folder and a routes folder

//models folder
// create Games.js file inside models folder
// In Games.js file
// Create an array called videoGames with at least 2 object entries for video games:
// Each object should have an:
// id ('use unique string numbers for hard coded array entries')
// name
// description
// yearReleased
// playtime

// parent route should be /api/v1/games
// routes to create:
// /getAllGames
// /getSingleGame
// /createGame
// /updateGame
// /deleteGame

//routes folder
// remember to use your status codes for each outcome
// getAllGames success should return a success confirmation and a list of the games in json
// getAllGames fail should return a fail confirmation and a message saying no games found
// getSingleGame success should return a success confirmation and a json of the game info
// getSingleGame fail should return a fail confirmation and a message that game was not found
// createGame success should return a game created confirmation and a json of the game
// createGame fail should return a fail confirmation and a message that game was not created
// updateGame success should send a success confirmation and a message that the game was updated
// updateGame fail should send a fail confirmation and a message that the game could not be updated
// deleteGame success should send a success confirmation and a message that game was deleted
// deleteGame fail should send a fail confirmation and a message that game could not be deleted

// CREATEGAME ROUTE
// in createGame route, only name and description fields are required. If they are not there the game should not be created and a message should be sent saying both name and description are required
// createGame should fail if the game name already exists

// (choose one option for creating an id)
//SIMPLE OPTION ID CREATION: (for createGame route)
//Make your id's start at one and increment when you create your array of objects
// Add one to the length of that array to make a new id like we did in class

// MORE CHALLENGING OPTION ID CREATION: (for createGame route)
// in your createGame route create the id dynamically by using uuidv4:
// Nanoid is an easy way to make fake id numbers for prototyping
// Read docs: https://www.npmjs.com/package/nanoid

// UPDATEGAME ROUTE
// in your updateGame route code, check to see which routes have been updated and update only the parts of the route that were updated

// Use Postman to confirm that your routes fail and succeed correctly.

// STRETCH GOAL:
// create a middleware that contains an array of snarky quotes you either find or make up
// each time you log a snarky quote should show in the console
// after you get the middleware working, comment out the middleware when you are working so it doesn't clutter your console
// Here is a dumb quote site if you want to use. Maybe pick the short ones so it doesn't clutter your console
// https://wpart.org/20-funny-web-developer-software-programmer-quotes/
//http://www.devtopics.com/101-great-computer-programming-quotes/

# Tools /Packages used

- dotenv `npm i dotenv`
- morgan middle ware `npm i -D morgan`