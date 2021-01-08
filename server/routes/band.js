const router = require("express").Router();
const bandsDB = require("../database/band.db");

router.route("/").get(async (req, res) => {
  try {
    let results = await bandsDB.all();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.route("/:id").get(async (req, res) => {
  try {
    let results = await bandsDB.one(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.route("/new").post(async (req, res) => {
  try {
    let results = await bandsDB.insert(req.body.name);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.route("/delete/:id").delete(async (req, res) => {
  try {
    let results = await bandsDB.delete(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
