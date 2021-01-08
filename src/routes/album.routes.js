const app = require("../app");
const { connection } = require("../db_connection");
const router = require("express").Router();

router.get("/", (req, res) => {
  const sql = "SELECT * FROM album";
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).send({ errorMessage: err.message });
    } else {
      res.status(200).json(results);
    }
  });
});

router.get("/:id", (req, res) => {
  connection.query(
    `SELECT * FROM album WHERE id=?`,
    [req.params.id],
    (err, results) => {
      if (err) {
        res.status(500).send("Error founding id of this album");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

router.post("/", (req, res) => {
  const { title, genre, picture, artist } = req.body;
  connection.query(
    "INSERT INTO album ( title, genre, picture, artist) VALUES ( ? , ? , ?, ? )",
    [title, genre, picture, artist],
    (err, results) => {
      if (err) {
        res
          .status(500)
          .send("Error saving a new album, something went wrong :(");
      } else {
        res.status(201).send(" Succesfully saved this album !");
      }
    }
  );
});

router.put("/:id", (req, res) => {
  const sql = "UPDATE album SET ? WHERE id=?";
  connection.query(sql, [req.body, req.params.id], (err, results) => {
    if (results.length === 0) {
      res.status(404).send({
        errorMessage: `Informations about your album could no be saved, id ${req.params.id} not found`,
      });
    } else {
      res.status(200).json(results[0]);
    }
  });
});

router.delete("/:id", (req, res) => {
  const sql = "DELETE FROM album WEHERE id=?";
  connection.query(sql, req.params.id, (err, results) => {
    if (err) {
      res.status(500).send({ errorMessage: err.message });
    } else {
      res.sendStatus(200);
    }
  });
});


router.get("/search", (req, res) => {
    connection.query(
        `SELECT * FROM album WHERE title = ?`, [req.query.title], (err, results) => {
            if (err) {
                res.status(500).send("Error, we were not able to find the title of this album")
            } else {
                res.status(200).json(results)
            }
        }
    )
})


router.get("/search", (req, res) => {
    connection.query(
        `SELECT * FROM album WHERE genre = ?`, [req.query.genre], (err, results) => {
            if (err) {
                res.status(500).send("Error, we were not able to find this genre")
            } else {
                res.status(200).json(results)
            }
        }
    )
})

module.exports = router;
