// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// require db for sequelize
const db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/landing.html"));
  });
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, async (req, res) => {
    // time stamps used for date comparisons
    const now = new Date();
    const sixDaysAgo = new Date(now - 6 * 24 * 60 * 60 * 1000);

    // get user account data to be shown on user's home page
    const userData = await db.User.findOne({
      where: {
        id: req.user.id,
      },
    });

    // get user symptom data to show on user's home page
    const symptomData = await db.Symptom.findAll({
      where: {
        userId: userData.id,
        createdAt: {
          // between 6 days ago and time route is hit
          [db.Sequelize.Op.between]: [sixDaysAgo, now],
        },
      },
    });

    // show user data on the user's homepage
    res.render("userhome", {
      email: userData.email,
      id: userData.id,
      symptomData,
    });
  });
};
