const jokes = require("give-me-a-joke");
const commandColor = require("chalk-rainbow");

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "Hello World!",
    e: "$$",
    T: "U",
  })
);

// console.log(jokes.getRandomJokeOfTheDay);

jokes.getRandomDadJoke(function (joke) {
  // console.log(joke);
  console.log(commandColor(`Dad Joke: ${joke}`));
});

jokes.getRandomJokeOfTheDay(function (joke) {
  console.log(commandColor(`Joke of the day: ${joke}`));
});
