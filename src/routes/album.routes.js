const {connection} = require('../db_connection');
const router = require('express').Router();

router.get('/', (req, res) => {
    const sql = "SELECT * FROM album";
    connection.query(sql, (err, results) => {
      if (err) {
        res.status(500).send({errorMessage: err.message});
      } else {
        res.status(200).json(results);
      }
    });
});

router.get('/:id', (req, res) => {
    const sql = "SELECT * FROM album WHERE id=?";
    connection.query(sql, [req.params.id], (err, results) => {
      if(results.length === 0){
        res.status(404).json({error:"Album not found"})
      
        } else {
          res.status(200).json(results[0]);
        }  
    })
});

router.get('/title/:title', (req, res) => {
    const sql = "SELECT * FROM album WHERE title=?";
    connection.query(sql, [req.params.title], (err, results) => {
      if(results.length === 0){
        res.status(404).json({error:"Album not found"})
      
        } else {
          res.status(200).json(results[0]);
        }  
    })
});

router.get('genre/:genre', (req, res) => {
    const sql = "SELECT * FROM album WHERE genre='?'";
    connection.query(sql, [req.params.genre], (err, results) => {
      if(results.length === 0){
        res.status(404).json({error:"Album not found"})
      
        } else {
          res.status(200).json(results[0]);
        }  
    })
});

router.get('artist/:artist', (req, res) => {
    const sql = "SELECT * FROM album WHERE artist='?'";
    connection.query(sql, [req.params.genre], (err, results) => {
      if(results.length === 0){
        res.status(404).json({error:"Album not found"})
      
        } else {
          res.status(200).json(results[0]);
        }  
    })
});

router.get('/songs/:id', (req, res) => {
    const albumId = req.params.id;
    const sql = `SELECT track.title, track.youtube_url FROM track JOIN album ON track.id_album = ${albumId}`;
    connection.query(sql, (err, results) => {
      if(results.length === 0){
        res.status(404).json({error:"album not found"})
        } else {
          res.status(200).json(results);
        }  
    })
});

router.post('/', (req, res) => {
    const sql = "INSERT INTO album SET ?";
    connection.query(sql, req.body, (err, results) => {
      if (err) {
        res.status(500).send({errorMessage: err.message});
      } else {
        res.status(201).json({id: results.insertId, ...req.body});
      }
    });
});

router.put('/:id', (req, res) => {
    let sql = "UPDATE album SET ? WHERE id=?";
    connection.query(sql, [req.body, req.params.id], (err, results) => {
      if (err) {
        res.status(500).send({errorMessage: err.message});
      } else {
        sql = "SELECT * FROM album WHERE id=?";
        connection.query(sql, req.params.id, (err, result) => {
          if (result.length === 0) {
            res.status(404).send({errorMessage: `Album with id ${req.params.id} not found`});
          } else {
            res.status(200).json(result[0]);
          }
        });
      }
    });
  });

router.delete('/:id', (req, res) => {
    const sql = "DELETE FROM album WHERE id=?";
    connection.query(sql, req.params.id, (err, results) => {
      if (err) {
        res.status(500).send({errorMessage: err.message});
      } else {
        res.status(200).send("Album(s) deleted !");
      }
    });
});

module.exports = router;