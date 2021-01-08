const pool = require("../helpers/connection");

let bandsDB = {};

bandsDB.all = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM bands", (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
};

bandsDB.one = (id) => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM bands where id = ?", [id], (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result[0]);
    });
  });
};

bandsDB.insert = (name) => {
  return new Promise((resolve, reject) => {
    pool.query("INSERT INTO bands(name) VALUES (?)", name, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
};

bandsDB.delete = (id) => {
  return new Promise((resolve, reject) => {
    pool.query("DELETE FROM bands WHERE id = (?)", [id], (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
};

module.exports = bandsDB;
