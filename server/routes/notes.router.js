const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    // GET route code here
});

// POST route for database
router.post('/', (req, res) => {
    // POST route code here
    console.log(req.body);
    const insertIntoNotes = `INSERT INTO "notes" ('lat', 'lng', 'title', 'description', 'image', 'public' )
                           VALUES ($1, $2, $3, $4, $5, $6);`
    const values = [req.body.lat, req.body.lng, req.body.title, req.body.description, req.body.image, req.body.public]
    pool.query(insertIntoNotes, [values])
        .then(() => res.sendStatus(201))
        .catch(err => {
            console.log('Error in notes POST route', err);
        })
    
});

module.exports = router;
