const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated, 
  } = require('../modules/authentication-middleware');

// get route for edit page details
router.get('/details/:id', rejectUnauthenticated, (req,res) => {
    console.log('/edit/details GET route');
    console.log('Is User logged in?', req.isAuthenticated());
    console.log('user info', req.user);

    const queryText = 
        `SELECT * FROM "notes"
        WHERE "notes".id = $1 and "notes".user_id = $2;`
    
    pool.query(queryText, [req.params.id, req.user.id])
        .then(result => {
            res.send(result.rows)
        })
        .catch(err => {
            console.log('Error in get details route', err);
            res.sendStatus(500)
        });
});


// update notes route
router.put('/details/:id', rejectUnauthenticated, (req, res) => {
    console.log('/edit/details UPDATE route');
    console.log('Is User logged in?', req.isAuthenticated());
    console.log('user info', req.user);
    console.log('req.params', req.params.id);
    const {title, description, public} = req.body
    const id = req.params.id
    const queryUpdateText = `UPDATE "notes" 
                            SET 
                            "title" = $1, 
                            "description" = $2, "public" = $3 
                            WHERE "notes".id = $4 and "notes".user_id = $5;`

    pool.query(queryUpdateText, [title, description, public, id, req.user.id])
        .then(result => {
            res.sendStatus(200)
        })
        .catch(err => {
            console.log('Error in edit PUT route', err);
            res.sendStatus(500)
        });

});

module.exports = router;