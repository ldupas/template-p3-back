const { connection } = require("../db_connection");
const router = require("express").Router();

router.get("/", (req, res) => {
  const sql = "SELECT * FROM track";
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
    `SELECT * FROM track WHERE id=?`,
    [req.params.id],
    (err, results) => {
      if (err) {
        res.status(500).send("Error founding id of this track");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

router.post("/", (req, res) => {
  const { title, youtube_url, album_id } = req.body;
  connection.query(
    "INSERT INTO track ( title, youtube_url, album_id) VALUES ( ? , ?, ?  )",
    [title, youtube_url, album_id],
    (err, results) => {
      if (err) {
        res
          .status(500)
          .send("Error saving a new track, something went wrong :(");
      } else {
        res.status(201).send(" Succesfully saved this track !");
      }
    }
  );
});

router.put("/:id", (req, res) => {
  const sql = "UPDATE track SET ? WHERE id=?";
  connection.query(sql, [req.body, req.params.id], (err, results) => {
    if (res.length=== 0) {
      res.status(404).send({
        errorMessage: `Informations about your track could no be saved, id ${req.params.id} not found`,
      });
    } else {
      res.status(200).json(results[0]);
    }
  });
});

router.delete("/:id", (req, res) => {
  const sql = "DELETE FROM track WEHERE id=?";
  connection.query(sql, req.params.id, (err, results) => {
    if (err) {
      res.status(500).send({ errorMessage: err.message });
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
