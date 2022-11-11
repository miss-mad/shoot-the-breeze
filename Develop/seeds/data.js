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
  { thoughtText: "thought 1", username: "MatteoRedfern" },
  { thoughtText: "thought 2", username: "KeaneDavila" },
  { thoughtText: "Clementine's Times", username: "ClementineTraynor" },
  { thoughtText: "thought 4", username: "TeresaCurran" },
  { thoughtText: "thought 5", username: "AkaashChavez" },
  { thoughtText: "Every little thing gonna be alright", username: "TyroneHayward" }, // 636ebe754284fa9a9c929b27
  { thoughtText: "Don't stop me now", username: "BeatriceChambers" }, // 636ebe894284fa9a9c929b29
  { thoughtText: "And I think it's gonna be a long, long time", username: "HaleyThorn" }, // 636ebe9d4284fa9a9c929b2b
  { thoughtText: "Blackbird singing in the dead of night", username: "JoanneRoth" }, // 636ebeab4284fa9a9c929b2d
  { thoughtText: "Summertime and the living's easy", username: "PhillippaBevan" }, // 636ebeb64284fa9a9c929b2f
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
  console.log({array})
  return array[Math.floor(Math.random() * array.length - 1)];
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
