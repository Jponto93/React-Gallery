DROP TABLE "galleryItems";

CREATE TABLE "galleryItems" (
"id" SERIAL PRIMARY KEY,
"path" VARCHAR (400),
"description" VARCHAR (250),
"likes" INT
);

INSERT INTO "galleryItems" ("path", "description", "likes")
VALUES
('images/IMG_1096.jpg', 'Photo of the best cat on the planet!', 0),
('images/motobecane-blue-1.jpg', 'A picture of my current bike!', 0),
('images/upper.peninsula.jpg', 'One of my favorite photos I have taken! This was in the Upper Peninsula, MI', 0),
('images/IMG_1097.jpg', 'Another photo of my cat!', 0),
('images/Rock-climbing-terminology.jpg', 'Rock climbing is amazing!', 0),
('images/kg.jpg', 'My favorite T-Wolves player!!', 0),
('images/az.jpg', 'Picture of me during a hike in Sedona, AZ', 0),
('images/moss.jpg', 'My favorite Viking!', 0);


