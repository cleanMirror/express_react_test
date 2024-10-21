const express = require('express')
const router = express.Router();
const connection = require('../db');

router.route("/")
    .get((req, res)=>{
        const query = 'SELECT * FROM TBL_PERSON';
        connection.query(query, (err, results) => {
            if (err) {
                console.error('쿼리 실행 실패:', err);
                return;
            }
            res.json({ success : true, list : results });
        });
    })
    .post((req, res)=>{
        const { name, gender, phone, addr } = req.body;
        const query = 'INSERT INTO TBL_PERSON(name, gender, phone, addr) VALUES(?, ?, ?, ?)';
      
        connection.query(query, [name, gender, phone, addr], (err, results) => {
          if (err) throw err;
          res.json({ success : true, message : "추가완료"});
        });
    })
    .put((req, res) => {
        const { id, prevGender } = req.body;

        var inputGender = "";
        if (prevGender == 'M') inputGender = "F";
        else                   inputGender = "M"; 

        const query = 'UPDATE TBL_PERSON SET gender = ? WHERE id = ?';
        connection.query(query, [inputGender, id], (err, results) => {
            if (err) throw err;
            res.json({ success : true, message : "수정완료" });
        })
    })
    .delete((req, res) => {
        const { id } = req.body;

        const query = 'DELETE FROM TBL_PERSON WHERE id = ?';
        connection.query(query, [ id ], (err, results) => {
            if (err) throw err;
            res.json({ success : true, message : "삭제완료" });
        })
    });
  
module.exports = router;