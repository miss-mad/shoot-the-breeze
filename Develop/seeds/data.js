// const users = [
//   "Matteo Redfern",
//   "Keane Davila",
//   "Clementine Traynor",
//   "Teresa Curran",
//   "Akaash Chavez",
//   "Tyrone Hayward",
//   "Angelo Chambers",
//   "Aeryn Conway",
//   "Joanne Roth",
//   "Phillippa Bevan",
// ];

const users = [
  { username: "MatteoRedfern", email: "mr@snapi.com" },
  { username: "KeaneDavila", email: "kr@snapi.com" },
  { username: "ClementineTraynor", email: "ct@snapi.com" },
  { username: "TeresaCurran", email: "tc@snapi.com" },
  { username: "AkaashChavez", email: "ac@snapi.com" },
  { username: "TyroneHayward", email: "th@snapi.com" },
  { username: "BeatriceChambers", email: "bc@snapi.com" },
  { username: "HaleyThorn", email: "ht@snapi.com" },
  { username: "JoanneRoth", email: "jr@snapi.com" },
  { username: "PhillippaBevan", email: "pb@snapi.com" },
];

// const thoughts = [
//   "thought 1",
//   "thought 2",
//   "thought 3",
//   "thought 4",
//   "thought 5",
//   "thought 6",
//   "thought 7",
//   "thought 8",
//   "thought 9",
//   "thought 10",
// ];

const thoughts = [
  { thoughtText: "thought 1", username: "MatteoRedfern" },
  { thoughtText: "thought 2", username: "KeaneDavila" },
  { thoughtText: "thought 3", username: "ClementineTraynor" },
  { thoughtText: "thought 4", username: "TeresaCurran" },
  { thoughtText: "thought 5", username: "AkaashChavez" },
  { thoughtText: "thought 6", username: "TyroneHayward" },
  { thoughtText: "thought 7", username: "BeatriceChambers" },
  { thoughtText: "thought 8", username: "HaleyThorn" },
  { thoughtText: "thought 9", username: "JoanneRoth" },
  { thoughtText: "thought 10", username: "PhillippaBevan" },
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
  users,
  // thoughts,
  // reactions,
  findRandomUser,
  findMultipleRandomUsers,
  findRandomThought,
  findRandomReaction,
};

// module.exports = [users, thoughts];
