const generateRandomString = () => {
  return `textTitle${Math.floor(Math.random() * Date.now()).toString(36)}`
};



module.exports = { generateRandomString };
