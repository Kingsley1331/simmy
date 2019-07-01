// https://www.youtube.com/watch?v=WDrU305J1yw

const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const path = require("path");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

const Scenes = require("./models/Scenes");
// const Product = require("./models/Scenes");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(express.static(path.join(__dirname, "client/build")));

app.use(bodyParser.json());

app.get("/ping", (req, res) => res.send("pong"));

// cookieSession takes the cookie data(mongodb user id) and attaches it to the req.session property
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/user")(app);

app.post("/scenes", (req, res) => {
  // console.log("BODY", req.body);
  const scene = new Scenes({
    _id: new mongoose.Types.ObjectId(),
    ...req.body
  });

  scene
    .save()
    .then(result => {
      console.log("result", result);
      res.status(201).json({
        message: "Handling POST request to /scenes",
        createdScene: result
      });
    })
    .catch(err => {
      console.log("error ==>", err);
      res.status(500).json({
        error: err
      });
    });

  // res.send(scene);
});

app.get("/scenes/:sceneId", (req, res) => {
  const id = req.params.sceneId;
  Scenes.findById(id)
    .exec()
    .then(doc => {
      console.log("doc from database", doc);
      res.status(200).json(doc);
    })
    .catch(err => {
      console.log("error =>", err);
      res.status(500).json(err);
    });
});

app.get("/scenes/", (req, res) => {
  Scenes.find()
    .exec()
    .then(docs => {
      console.log("doc from database", docs);
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log("error =>", err);
      res.status(500).json(err);
    });
});

app.delete("/scenes/:sceneId", (req, res) => {
  const id = req.params.sceneId;
  Scenes.remove({ _id: id })
    .exec()
    .then(result => {
      console.log("doc from database", result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log("error =>", err);
      res.status(500).json({ error: err });
    });
});

app.patch("/scenes/:sceneId", (req, res) => {
  console.log("NEW BODY", req.body);
  const id = req.params.sceneId;
  Scenes.update({ _id: id }, { $set: req.body })
    .exec()
    .then(result => {
      console.log("updated scene from database", result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log("error =>", err);
      res.status(500).json({ error: err });
    });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
