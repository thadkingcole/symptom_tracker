// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

// require moment for date comparisons
const moment = require("moment");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  });
  app.get("/api/symptoms", (req, res) => {
    db.Symptom.findAll({
      where: {
        userId: req.user.id,
      },
    }).then((results) => {
      res.json(results);
    });
  });
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });

  // Route for adding data to symtom table for a logged in user
  app.post("/api/user_data", isAuthenticated, async (req, res) => {
    const startOfDay = moment().startOf("day").toDate();
    const endOfDay = moment().endOf("day").toDate();
    const dailyLog = req.body;
    // has an entry already been created today?
    const recordedLog = await db.Symptom.findOne({
      where: {
        UserId: req.user.id,
        createdAt: {
          [db.Sequelize.Op.between]: [startOfDay, endOfDay],
        },
      },
    });

    if (recordedLog) {
      // user has already created a log, but is sending another
      // need to delete the log so that the new data is logged correctly
      // and we remain at only 1 entry per day
      db.Symptom.destroy({
        where: { id: recordedLog.dataValues.id },
      }).then(console.log("overwrite:", recordedLog));
    }

    // user has no prior entries today, or its been deleted
    // create new entry
    db.Symptom.create({ ...dailyLog, UserId: req.user.id }).then(() => {
      console.log("new:", { ...dailyLog, UserId: req.user.id });
      console.log(recordedLog);
      // 201 means created, then reload page
      res.status(201).redirect("/members");
    });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
