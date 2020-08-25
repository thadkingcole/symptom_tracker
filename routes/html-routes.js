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
    // get user data to be shown on user's home page
    const userData = await db.User.findOne({
      where: {
        id: req.user.id,
      },
    });
    const symptomData = await db.Symptom.findAll({
      where: {
        userId: userData.id,
      },
      // TODO limit results to most recent 5
    });
    console.log(symptomData);
    // show user data on the user's homepage
    res.render("userhome", {
      email: userData.email,
      id: userData.id,
      symptomData,
    });
  });
};
