const connection = require('../db-config');
const router = require('express').Router();

router.get('/', (req, res) => {
    connection.query('SELECT * FROM animal', (err, result) => {
      if (err) {
        res.status(500).send('Error retrieving animals from database');
      } else {
        res.json(result);
      }
    });
  });

router.get('/:id', (req, res) => {
const animalId = req.params.id;
connection.query(
    'SELECT * FROM animal WHERE id = ?',
    [animalId],
    (err, results) => {
    if (err) {
        res.status(500).send('Error retrieving animal from database');
    } else {
        if (results.length) res.json(results[0]);
        else res.status(404).send('Animal not found');
    }
    }
);
}); 

router.post('/', (req, res) => {
  const { name, species, age, description, picture } = req.body;
  connection.query(
    'INSERT INTO animal (name, species, age, description, picture) VALUES (?, ?, ?, ?, ?)',
    [name, species, age, description, picture],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error saving the animal');
      } else {
        const id = result.insertId;
        const createdAnimal = { id, name, species, age, description, picture };
        res.status(201).json(createdAnimal);
      }
    }
  );
});

router.put('/:id', (req, res) => {
  const animalId = req.params.id;
  const db = connection.promise();
  let existingAnimal = null;
  db.query('SELECT * FROM animal WHERE id = ?', [animalId])
    .then(([results]) => {
      existingAnimal = results[0];
      if (!existingAnimal) return Promise.reject('RECORD_NOT_FOUND');
      return db.query('UPDATE animal SET ? WHERE id = ?', [req.body, animalId]);
    })
    .then(() => {
      res.status(200).json({ ...existingAnimal, ...req.body });
    })
    .catch((err) => {
      console.error(err);
      if (err === 'RECORD_NOT_FOUND')
        res.status(404).send(`Animal with id ${animalId} not found.`);
      else res.status(500).send('Error updating an animal');
    });
});

router.delete('/:id', (req, res) => {
  connection.query(
    'DELETE FROM animal WHERE id = ?',
    [req.params.id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error deleting an animal');
      } else {
        if (result.affectedRows) res.status(200).send('🎉 Animal deleted!');
        else res.status(404).send('Animal not found.');
      }
    }
  );
});


module.exports = router;
