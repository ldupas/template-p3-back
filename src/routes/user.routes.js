const {connection} = require('../db_connection');
const router = require('express').Router();

router.get('/', (req, res) => {
    const sql = "SELECT * FROM user";
    connection.query(sql, (err, results) => {
      if (err) {
        res.status(500).send({errorMessage: err.message});
      } else {
        res.status(200).json(results);
      }
    });
});

router.get('/:id/favorite', (req, res) => {
    const sql = "SELECT album.title, album.artist, album.genre FROM album JOIN user_album ON album.id = user_album.id_album JOIN user ON user_album.id_user = ?";
    connection.query(sql, [req.params.id], (err, results) => {
      if (err) {
        res.status(500).send({errorMessage: err.message});
      } else {
        res.status(200).json(results);
      }
    });
});

router.post('/', (req, res) => {
    const sql = "INSERT INTO user SET ?";
    connection.query(sql, req.body, (err, results) => {
      if (err) {
        res.status(500).send({errorMessage: err.message});
      } else {
        res.status(201).json({id: results.insertId, ...req.body});
      }
    });
});

router.post('/favorite', (req, res) => {
    const sql = "INSERT INTO user_album SET ?";
    connection.query(sql, req.body, (err, results) => {
      if (err) {
        res.status(500).send({errorMessage: err.message});
      } else {
        res.status(201).json({id: results.insertId, ...req.body});
      }
    });
});

//Possible delete selon l'id du user et de l'album à supprimer
// router.delete('/:id-user/favorite/:id-album', (req, res) => {
//     const sql = "DELETE FROM user_album WHERE id_user=? AND id_album=?";
//     connection.query(sql, [req.params.id-user, res.params.id-album], (err, results) => {
//       if (err) {
//         res.status(500).send({errorMessage: err.message});
//       } else {
//         res.status(200).send("Album(s) deleted from your favorites !");
//       }
//     });
// });

router.delete('/favorite/:id', (req, res) => {
    const sql = "DELETE FROM user_album WHERE id=?";
    connection.query(sql, req.params.id, (err, results) => {
      if (err) {
        res.status(500).send({errorMessage: err.message});
      } else {
        res.status(200).send("Album(s) deleted from your favorites !");
      }
    });
});

module.exports = router;