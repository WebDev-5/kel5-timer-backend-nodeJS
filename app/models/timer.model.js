module.exports = (sequelize, Sequelize) => {
  const Timer = sequelize.define("timer", {
    title: {
      type: Sequelize.STRING
    },
    time_began: {
      type: Sequelize.STRING
    },
    time_stopped: {
      type: Sequelize.STRING
    },
    stopped_duration: {
      type: Sequelize.INTEGER
    },
    started: {
      type: Sequelize.INTEGER
    },
    running: {
      type: Sequelize.BOOLEAN
    }
  });
  return Timer;
};