const connection = require('../db-config');
const router = require('express').Router();

// sur le router, on associe 3 choses : le verbe d'action qui est ici get 
// pour lire l'info
// le chemin qui est /, sous entendu localhost:8000/api/animals/
// une requête sql qui correspond à mes besoins : ici lire les animaux 
// de l'entité animal de la bdd
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



module.exports = router;