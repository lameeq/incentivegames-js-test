// We import the object from the data file. Inside that object there is a function to get players data
const { getPlayers } = require("./players");

/**
 * Test 1
 * Write a function to log in the console the players data with this format:
 * PLAYER 1
 * NAME: Zinedine
 * LASTNAME: Zidane
 * POSITION: Midfielder
 * PLAYER 2...
 */

 // Your code

 function PrintPLayer()
 {
     count = 0;
     const players = getPlayers();
     players.forEach(player => {
         count++;
         console.log("PLAYER "+count);
         console.log("NAME: "+player.name);
         console.log("LASTNAME: "+player.lastname);
         console.log("POSITION: "+player.position);
     });
 }
 
 PrintPLayer();
 

/**
 * Test 2
 * Write a function to log in the console an array with only the names of the players, ordered by name length descending
 */

// Your code

// const players = require('./players.js');

// function SortByName()
// {
//     const playerNames = players.getPlayers().map(({name}) => name)
//     .sort((a, b) => b.length - a.length);
//   console.log(playerNames);
// }

// SortByName();

/**
 * Test 3
 * Write a function to log in the console the average number of goals there will be in a match if all the players in the data play on it
 * scoringChance means how many goals per 100 matches the player will score
 * Example: 10 players play in a match, each of them has a 0.11 scoringChance, the total number of goals will be 1.1 average 
 * Output example -> Goals per match: 2.19
 */

// Your code

// const player = require('./players');

// function calculateAverageGoals(games) {
//   const players = player.getPlayers();

//   let totalGoals = 0;
//   for (let i = 0; i < players.length; i++) {
//     totalGoals += players[i].scoringChance;
//   }

//   const averageGoals = (totalGoals / 100) * games;

//   console.log(`Goals per match: ${averageGoals.toFixed(2)}`);
// }

// calculateAverageGoals(1); 

/**
 * Test 4
 * Write a function that accepts a name, and logs the position of the player with that name (by position it means striker, goalkeeper...)
 */

// Your code

// const playersModule = require('./players.js');

// function logPlayerPosition(name) {
//   const players = playersModule.getPlayers();
  
//   const player = players.find(player => player.name === name);
  
//   if (!player) {
//     console.log(`${name} is not a known player.`);
//     return;
//   }
  
//   console.log(`${name} plays as a ${player.position}.`);
// }

// logPlayerPosition('Andre');
