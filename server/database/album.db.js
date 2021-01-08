const pool = require("../helpers/connection");

const albumDB = {};

albumDB.all = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM albums", (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
};

albumDB.one = (id) => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM albums WHERE id = ?", [id], (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
};

module.exports = albumDB;
