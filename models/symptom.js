module.exports = function(sequelize, DataTypes) {
    const Symptom = sequelize.define("Symptom", {
      runnyNose: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      cough: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      mood: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 10
        }
      }
    });
  
    Symptom.associate = function(models) {
      // We're saying that a Symptom should belong to an User
      // A Symptom can't be created without an User due to the foreign key constraint
      Symptom.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Symptom;
  };
  