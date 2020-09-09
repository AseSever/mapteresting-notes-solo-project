const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated, 
  } = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated, (req, res) => {
    // GET route code here
    console.log('/note GET route');
    console.log('Is User logged in?', req.isAuthenticated());
    console.log('user info', req.user)

    const queryText = 
        `SELECT * FROM "notes" 
        WHERE "notes".user_id = $1;`
    pool.query(queryText, [req.user.id]).then(result => {
        res.send(result.rows)
    })
    .catch(err => {
        console.log('Error in myNotes GET route', err);
    })
});

// POST route for database
router.post('/', (req, res) => {
    // POST route code here
    console.log(req.body);
    const insertIntoNotes = 
        `INSERT INTO "notes" ("lat", "lng", "title", "description", "image", "public", "user_id" )
        VALUES ($1, $2, $3, $4, $5, $6, $7);`

    pool.query(insertIntoNotes, [req.body.lat, req.body.lng, req.body.title, req.body.description, req.body.image, req.body.public, req.body.user_id])
        .then(() => res.sendStatus(201))
        .catch(err => {
            console.log('Error in notes POST route', err);
        })
});

module.exports = router;
