module.exports = function (sequelize, DataTypes) {
  const Symptom = sequelize.define("Symptom", {
    runnyNose: {
      type: DataTypes.BOOLEAN,
      defaultValue: false, // if not checked
    },
    cough: {
      type: DataTypes.BOOLEAN,
      defaultValue: false, // if not checked
    },
    mood: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
  });

  Symptom.associate = function (models) {
    // We're saying that a Symptom should belong to an User
    // A Symptom can't be created without an User due to the foreign key constraint
    Symptom.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Symptom;
};
