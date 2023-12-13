require("dotenv").config();

const express = require("express");
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");
const bodyParser = require("body-parser");
var path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const routes = require("./routes/index");

app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(
  session({
    name: "uni-login",
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge:  24*60*60*1000 }
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'));
app.use('/student', express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.locals.message = req.flash("message");
  next();
});

app.use("/", routes);
require("./config/passport")(passport);

app.listen(PORT, () => {
  console.log(`Application server started on port: ${PORT}`);
});
