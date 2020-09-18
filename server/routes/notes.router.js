const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// route to update a like for a public post
router.put('/likes/:id', rejectUnauthenticated, async (req, res) => {
    console.log(`/note/likes/${req.params.id} route`);
    console.log('Is User logged in?', req.isAuthenticated());
    console.log('user info', req.user.id);

    const client = await pool.connect();

    try {
       
        await client.query('BEGIN')
        
        const selectLikesQuery = `
            SELECT * FROM "likes"
            WHERE "likes".user_id = $1 AND "likes".notes_id = $2;
            `
        const deleteLikesQuery =
            `
            DELETE FROM "likes"
            WHERE "likes".user_id = $1 AND "likes".notes_id = $2;
            `
        const insertLikesQuery = 
            `
            INSERT INTO "likes" (user_id, notes_id)
            VALUES ($1, $2);
            
            `
        const result = await client.query(selectLikesQuery, [req.user.id, req.params.id])
           
        if( result.rows.length > 0 ) {
            
            await client.query(deleteLikesQuery, [req.user.id, req.params.id])
        } else {
            
            await client.query(insertLikesQuery, [req.user.id, req.params.id])
        }

        await client.query('COMMIT')
        res.sendStatus(201)
    } catch (err) {
        await client.query('ROLLBACK');
        console.log(err);
        res.sendStatus(500);
    } finally {
        client.release();
    }

});

// route to get public notes for home page
router.get('/public', rejectUnauthenticated, (req, res) => {

    const queryText =
        `SELECT COUNT("likes".notes_id), "user".username, "notes".id, title, image, date_created, public FROM "notes"
        JOIN "user" ON "notes".user_id = "user".id
        FULL OUTER JOIN "likes" ON "notes".id = "likes".notes_id
        WHERE "notes".public = 'true'
        GROUP BY "likes".notes_id, "notes".id, "user".username
        ORDER BY "date_created" DESC;`

    pool.query(queryText).then(result => {
        res.send(result.rows)
    })
        .catch(err => {
            console.log('Error in public note route', err);
            res.sendStatus(500);
        });
});

// router to get notes for My Notes page
router.get('/', rejectUnauthenticated, (req, res) => {
    // GET route code here
    console.log('/note GET route');
    console.log('Is User logged in?', req.isAuthenticated());
    console.log('user info', req.user);

    const queryText =
        `SELECT * FROM "notes" 
        WHERE "notes".user_id = $1;`
    pool.query(queryText, [req.user.id]).then(result => {
        res.send(result.rows)
    })
        .catch(err => {
            console.log('Error in myNotes GET route', err);
            res.sendStatus(500);
        });
});

// route for My Notes Details page
router.get('/details/:id', rejectUnauthenticated, (req, res) => {
    console.log('/note/details GET route');
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

// POST route for database
router.post('/', rejectUnauthenticated, (req, res) => {
    // POST route code here
    console.log(req.body.lat);
    const insertIntoNotes =
        `INSERT INTO "notes" ("lat", "lng", "title", "description", "image", "public", "user_id" )
        VALUES ($1, $2, $3, $4, $5, $6, $7);`

    pool.query(insertIntoNotes, [req.body.lat, req.body.lng, req.body.title, req.body.description, req.body.image, req.body.public, req.body.user_id])
        .then(() => res.sendStatus(201))
        .catch(err => {
            console.log('Error in notes POST route', err);
            res.sendStatus(500);
        });
});

//DELETE route for notes
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log(req.params.id);
    let id = req.params.id
    const deleteQuery =
        `DELETE FROM "notes"
        WHERE "notes".id = $1 and "notes".user_id = $2;`

    pool.query(deleteQuery, [id, req.user.id])
        .then(() => res.sendStatus(200))
        .catch(err => {
            console.log('Error in notes Delete route', err);
            res.sendStatus(500);
        });
});



module.exports = router;
