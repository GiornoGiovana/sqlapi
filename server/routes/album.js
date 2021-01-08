const router = require("express").Router();
const albumsDB = require("../database/album.db");

router.route("/").get(async (req, res) => {
  try {
    let result = await albumsDB.all();
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.route("/:id").get(async (req, res) => {
  try {
    let result = await albumsDB.one(req.params.id);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
