const connection = require("../db-config");
const router = require("express").Router();

// sur le router, on associe 3 choses : le verbe d'action qui est ici get
// pour lire l'info
// le chemin qui est /, sous entendu localhost:8000/api/animals/
// une requête sql qui correspond à mes besoins : ici lire les animaux
// de l'entité animal de la bdd
router.get("/", (req, res) => {
  connection.query("SELECT * FROM hero", (err, result) => {
    if (err) {
      res.status(500).send("Error retrieving heroes from database");
    } else {
      res.json(result);
    }
  });
});

router.get("/:id", (req, res) => {
  const heroId = req.params.id;
  connection.query(
    "SELECT * FROM hero WHERE id=?",
    [heroId],
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving hero from database");
      } else {
        if (results.length) res.json(results[0]);
        else res.status(404).send("Hero not found");
      }
    }
  );
});

router.post("/", (req, res) => {
  const { name, picture, speed, strength, stamina, gender, race, price } =
    req.body;
  connection.query(
    "INSERT INTO hero (name, picture, speed, strength, stamina, gender, race, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [name, picture, speed, strength, stamina, gender, race, price],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error saving the hero");
      } else {
        const id = result.insertId;
        const createdHero = {
          id,
          name,
          picture,
          speed,
          strength,
          stamina,
          gender,
          race,
          price,
        };
        res.status(201).json(createdHero);
      }
    }
  );

  router.put("/:id", (req, res) => {
    const heroId = req.params.id;
    const db = connection.promise();
    let existingHero = null;
    db.query('SELECT * FROM hero WHERE id=?', [heroId])
      .then(([results]) => {
        existingHero = results[0];
        if (!existingHero) return Promise.reject("RECORD_NOT_FOUND");
        return db.query('UPDATE hero SET ? WHERE id=?', [req.body, heroId]);
      })
      .then(() => {
        res.status(200).json({ ...existingHero, ...req.body });
      })
      .catch((err) => {
        console.error(err);
        if (err === "RECORD_NOT_FOUND")
          res.status(404).send(`Hero with id ${heroId} not found.`);
        else res.status(500).send("Error updating an hero");
      });
  });

  router.delete("/:id", (req, res) => {
    connection.query(
      "DELETE FROM hero WHERE id = ?",
      [req.params.id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error deleting an hero");
        } else {
          if (result.affectedRows) res.status(200).send("🎉 Hero deleted!");
          else res.status(404).send("Hero not found.");
        }
      }
    );
  });
});

module.exports = router;
