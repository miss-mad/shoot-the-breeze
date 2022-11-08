// helper function to validate email in the User schema
const validateEmail = (email) => {
  const regexEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  return regexEmail.test(email);
};

module.exports = validateEmail;
