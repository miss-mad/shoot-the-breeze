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
  { thoughtText: "This is what I think about this", username: "TyroneHayward" }, // 636dcdb36841c0c3631c8400
  { thoughtText: "Very original thought here", username: "BeatriceChambers" }, // 636dcdc36841c0c3631c8402
  { thoughtText: "look at me now", username: "HaleyThorn" }, // 636dcdcf6841c0c3631c8404
  { thoughtText: "Gold is my favorite color", username: "JoanneRoth" }, // 636dcdde6841c0c3631c8406
  { thoughtText: "Summertime and the living's easy", username: "PhillippaBevan" }, // 636dcdea6841c0c3631c8408
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
