const express = require("express");
const app = express();

app.use(express.json());

const bandRouter = require("./routes/band");
const albumRouter = require("./routes/album");

app.use("/band", bandRouter);
app.use("/album", albumRouter);

app.listen(3000, () => console.log("Server running on port 3000"));

// const connection = mysql.createPool({
//   connectionLimit: 10,
//   user: "root",
//   password: "blacksheep",
//   host: "localhost",
//   database: "social_network",
// });

// app.post("/login", (req, res) => {
//   const user = [req.body.name];
//   connection.query(
//     "SELECT * FROM users WHERE name = ?", user, (err, result) => {
//       if (err) throw err;
//       res.json(result);
//     }
//   );
// });
