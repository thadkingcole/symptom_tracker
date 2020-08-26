module.exports = function (sequelize, DataTypes) {
  const Symptom = sequelize.define("Symptom", {
    runnyNose: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    cough: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    nausea: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    vomitting: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    bloating: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    constipation: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    mood: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    note: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 160],
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
