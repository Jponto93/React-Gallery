# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

In this project I created a photo gallery. There is a form component that houses inputs, as well as a list component creates image tiles and displays them to the DOM. The list is sourced to a database, you can set up your own using the database.sql included. 

To get started, you will want to...

npm install
npm install pg axios express

I also used some material.ui, and the codes I used were
npm install @emotion/react @emotion/styled. Those codes were needed to get material.ui to be friendly with the version of React being used.

After installation and DB setup, you will want to...
npm run client
npm run server

This should open a tab on your browser and will render all of the images in the database to the DOM. 

Also, you will find there is an input for a URL as well as a description. Feel free to add your own photos using absolute URLs.

Once your photos are inserted to the DB they will also render to the DOM and you can click on the image to toggle it's description.

Lastly, there is a heart icon that will count how many "likes" a picture has received. Also, you can click the "cancel" icon on the lower right side of the tile to delete the picture from the database as well as the DOM.

Thank you and enjoy!!


Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
