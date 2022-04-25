// Ici, je permets à mes requêtes SQL futures d'aboutir
// en créant une connexion avec ma DB perso
const connection = require('../db-config');
// on permet à notre fichier d'être associé à la 
// méthode Router d'express
const router = require('express').Router();

// sur le router, on associe 3 choses : le verbe d'action qui est ici get 
// pour lire l'info
// le chemin qui est /, sous entendu localhost:8000/api/monthème/
// une requête sql qui correspond à mes besoins : ici lire les produits 
// de l'entité product de la bdd
router.get('/', (req, res) => {
    // je crée ma connexion à la BDD
    connection.query('SELECT * FROM product', (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving products from database');
        }
        else 
        {
            res.json(results);
        }
    });
});

// Ici, je crée une route get par id pour chercher
// dynamiquement un objet précis dans ma data
router.get('/:id', (req, res) => {
    // Je dois prévoir d'abord la lecture du param 
    // de l'url
    const productId = req.params.id
    connection.query('SELECT * FROM product WHERE id=?',
    [productId],
    (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving products from database');
        }
        else 
        {
            if (results.length) res.json(results[0]);
            else res.status(404).send('Product not found');
        }
    });
});

// Maintenant, j'aimerais pouvoir ajouter de la data dans ma DB
// sur ce thème précis évidemment
router.post('/', (req, res) => {
    // Ici je déscructure le corps de ma requête
    // Corps de ma requête = propriétés de ma table DB
    // (au moins, ce qui est en NOT NULL par défaut)
    const { name, price, description, picture } = req.body;
connection.query(
    'INSERT INTO product (name, price, description, picture) VALUES (?, ?, ?, ?)',
    [name, price, description, picture],
    (err, result) => {
        if (err) {
            res.status(500).send('Error retrieving products from database');
        }
        else 
        {
            const id = result.insertId;
            // Ici je définis ce que je veux voir en tant que retour json
            const createdProduct = { id, name };
            res.status(201).json(createdProduct);
        }
    }
)
})





// on exporte ici notre router du thème en question
// pour pouvoir le lire sur l'index.routes.js
module.exports = router;