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

// const users = [
//   { username: "MatteoRedfern", email: "mr@snapi.com" },
//   { username: "KeaneDavila", email: "kr@snapi.com" },
//   { username: "ClementineTraynor", email: "ct@snapi.com" },
//   { username: "TeresaCurran", email: "tc@snapi.com" },
//   { username: "AkaashChavez", email: "ac@snapi.com" },
//   { username: "TyroneHayward", email: "th@snapi.com" },
//   { username: "BeatriceChambers", email: "bc@snapi.com" },
//   { username: "HaleyThorn", email: "ht@snapi.com" },
//   { username: "JoanneRoth", email: "jr@snapi.com" },
//   { username: "PhillippaBevan", email: "pb@snapi.com" },
// ];

const users = [
  { username: "MatteoRedfern" },
  { username: "KeaneDavila" },
  { username: "ClementineTraynor" },
  { username: "TeresaCurran" },
  { username: "AkaashChavez" },
  { username: "TyroneHayward" },
  { username: "BeatriceChambers" },
  { username: "HaleyThorn" },
  { username: "JoanneRoth" },
  { username: "PhillippaBevan" },
];

const emails = [
  { email: "mr@snapi.com" },
  { email: "kr@snapi.com" },
  { email: "ct@snapi.com" },
  { email: "tc@snapi.com" },
  { email: "ac@snapi.com" },
  { email: "th@snapi.com" },
  { email: "bc@snapi.com" },
  { email: "ht@snapi.com" },
  { email: "jr@snapi.com" },
  { email: "pb@snapi.com" },
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
  { thoughtText: "thought 1", username2: "MatteoRedfern" },
  { thoughtText: "thought 2", username2: "KeaneDavila" },
  { thoughtText: "thought 3", username2: "ClementineTraynor" },
  { thoughtText: "thought 4", username2: "TeresaCurran" },
  { thoughtText: "thought 5", username2: "AkaashChavez" },
  { thoughtText: "thought 6", username2: "TyroneHayward" },
  { thoughtText: "thought 7", username2: "BeatriceChambers" },
  { thoughtText: "thought 8", username2: "HaleyThorn" },
  { thoughtText: "thought 9", username2: "JoanneRoth" },
  { thoughtText: "thought 10", username2: "PhillippaBevan" },
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

// const findRandomUser = () => {
//   return `${findRandomArrayItem(users)}`;
// };

const findMultipleRandomUsers = (numberOfRandomUsers) => {
  const randomUsersArray = [];
  for (let i = 0; i < numberOfRandomUsers; i++) {
    randomUsersArray.push(findRandomArrayItem(users));
  }
  return randomUsersArray;
};

// const findEmailOfUser = (indexOfUser) => {
//   const randomEmailArray = [];
//   for (let i = 0; i < indexOfUser; i++) {
//     users[0]["username"].
//   }
//   return randomEmailArray;
// };

const findRandomThought = (thoughtNumber) => {
  const thoughtsArray = [];
  for (let i = 0; i < thoughtNumber; i++) {
    thoughtsArray.push(findRandomArrayItem(thoughts));
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
  emails,
  // thoughts,
  // reactions,
  findRandomArrayItem,
  // findRandomUser,
  findMultipleRandomUsers,
  findRandomThought,
  findRandomReaction,
};

// module.exports = [users, thoughts];
