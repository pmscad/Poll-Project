
const express = require('express');
require(`fetch`);

require(`dotenv`).config(); // eslint-disable-line

const PORT = process.env.PORT || 8080;
const db = require("./models");
const seeds = require(`./seed.js`);

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);
const htmlRoutes = require("./routes/html-routes.js");
app.use(htmlRoutes);

db.sequelize.sync({force:true})
    .then(() => {
        seeds(db);
        app.listen(PORT, () => {
            console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
    });
});

db.sequelize.sync({ force: true }).then(() => {
  seeds(db);
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
