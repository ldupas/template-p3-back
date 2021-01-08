const {connection} = require('../db_connection');
const router = require('express').Router();

router.get('/', (req, res) => {
    const sql = "SELECT * FROM track";
    connection.query(sql, (err, results) => {
      if (err) {
        res.status(500).send({errorMessage: err.message});
      } else {
        res.status(200).json(results);
      }
    });
});

router.get('/:id', (req, res) => {
    const sql = "SELECT * FROM track WHERE id=?";
    connection.query(sql, [req.params.id], (err, results) => {
      if(results.length === 0){
        res.status(404).json({error:"song not found"})
      
        } else {
          res.status(200).json(results[0]);
        }  
    })
});

router.post('/', (req, res) => {
    const sql = "INSERT INTO track SET ?";
    connection.query(sql, req.body, (err, results) => {
      if (err) {
        res.status(500).send({errorMessage: err.message});
      } else {
        res.status(201).json({id: results.insertId, ...req.body});
      }
    });
});

router.put('/:id', (req, res) => {
    let sql = "UPDATE track SET ? WHERE id=?";
    connection.query(sql, [req.body, req.params.id], (err, results) => {
      if (err) {
        res.status(500).send({errorMessage: err.message});
      } else {
        sql = "SELECT * FROM track WHERE id=?";
        connection.query(sql, req.params.id, (err, result) => {
          if (result.length === 0) {
            res.status(404).send({errorMessage: `Song with id ${req.params.id} not found`});
          } else {
            res.status(200).json(result[0]);
          }
        });
      }
    });
  });

router.delete('/:id', (req, res) => {
    const sql = "DELETE FROM track WHERE id=?";
    connection.query(sql, req.params.id, (err, results) => {
      if (err) {
        res.status(500).send({errorMessage: err.message});
      } else {
        res.status(200).send("Song(s) deleted !");
      }
    });
});

module.exports = router;