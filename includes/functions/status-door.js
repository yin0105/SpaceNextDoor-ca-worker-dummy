const checkDoorStatus = () => {
  return new Promise((resolve, reject) => {
    let possibilities = ['open', 'closed']
    resolve(possibilities[Math.floor(Math.random() * possibilities.length)])
  });
};

module.exports = checkDoorStatus;