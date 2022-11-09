const users = [
  "Matteo Redfern",
  "Keane Davila",
  "Clementine Traynor",
  "Teresa Curran",
  "Akaash Chavez",
  "Tyrone Hayward",
  "Angelo Chambers",
  "Aeryn Conway",
  "Joanne Roth",
  "Phillippa Bevan",
];

const thoughts = [
  "thought 1",
  "thought 2",
  "thought 3",
  "thought 4",
  "thought 5",
  "thought 6",
  "thought 7",
  "thought 8",
  "thought 9",
  "thought 10",
];

const findRandomArrayItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const findRandomUser = () => `${findRandomArrayItem(users)}`;

const findRandomThought = (thoughtNumber) => {
  const thoughtsArray = [];
  for (let i = 0; i < thoughtsArray; i++) {
    thoughtsArray.push({ thoughtText: findRandomArrayItem(thoughts) });
  }
  return thoughtsArray;
};

module.exports = { findRandomUser, findRandomThought };

// module.exports = [users, thoughts];
