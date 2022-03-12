const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const connectDB = require("./config/db");
const passport = require("passport");
const cors = require("cors");
require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
connectDB();

const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const catalogRouter = require("./routes/catalog");
const authRouter = require("./routes/auth");

const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});
app.use(
  cors({
    credentials: true,
    allowedHeaders: ["Origin, X-Requested-With, Content-Type, Accept"],
  })
);
app.set("trust proxy", 1);
app.use(require("./config/session"));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", express.static("./public"));
app.use("/api/user", userRouter);
app.use("/api/movies", catalogRouter);
app.use("/api/auth", authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(errorHandler);

/**
 * ========== SERVER ==============
 */

const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.listen(PORT, function () {
  console.log(`Express listening on PORT ${PORT} in ${NODE_ENV} mode`);
});
