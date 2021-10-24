const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js')
// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }

    sqlText = `
    UPDATE "galleryItems"
    SET "likes" = "likes" + 1
    WHERE "id" = $1;
    `;
    let values = [galleryId]

    pool
        .query(sqlText, values)
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('router.js error in PUT', err);
        })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    console.log('inside router.js GET');
    const sqlText =`
    SELECT * FROM "galleryItems" ORDER BY "id" ASC;
    `;
    pool.query(sqlText)
    .then((result) => {
        console.log('router.js successful GET', result.rows);
        res.send(result.rows)
    })
    .catch((error) => {
        console.log('router.js error in GET', error);
        res.sendStatus(500);
    })

}); // END GET Route

// POST route
router.post('/', (req, res) => {
    const newGalleryItem = req.body;
    console.log('this is req.body', newGalleryItem);

    const sqlText = `
    INSERT INTO "galleryItems" ("path", "description", "likes")
    VALUES ($1, $2, $3);
    `;

    let values = [
        newGalleryItem.path,
        newGalleryItem.description,
        newGalleryItem.likes
    ];
    pool
        .query(sqlText, values)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Error making DB POST', error);
            res.sendStatus(500);
        })
});

module.exports = router;