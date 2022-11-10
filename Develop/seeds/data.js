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

const reactions = [
  "reaction 1",
  "reaction 2",
  "reaction 3",
  "reaction 4",
  "reaction 5",
  "reaction 6",
  "reaction 7",
  "reaction 8",
  "reaction 9",
  "reaction 10",
];

const findRandomArrayItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const findRandomUser = () => {
  return `${findRandomArrayItem(users)}`;
};

const findMultipleRandomUsers = (numberOfRandomUsers) => {
  const randomUsersArray = [];
  for (let i = 0; i < numberOfRandomUsers; i++) {
    randomUsersArray.push(findRandomUser());
  }
  return randomUsersArray;
};

const findRandomThought = (thoughtNumber) => {
  const thoughtsArray = [];
  for (let i = 0; i < thoughtNumber; i++) {
    thoughtsArray.push({ thoughtText: findRandomArrayItem(thoughts) });
  }
  return thoughtsArray;
};

const findRandomReaction = (reactionNumber) => {
  const reactionsArray = [];
  for (let i = 0; i < reactionNumber; i++) {
    reactionsArray.push({ reactionBody: findRandomArrayItem(reactions) });
  }
  return reactionsArray;
};

module.exports = {
  findRandomUser,
  findMultipleRandomUsers,
  findRandomThought,
  findRandomReaction,
};

// module.exports = [users, thoughts];
