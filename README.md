# Dog-Meet-Dog

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Description:
* Have you ever wanted to make puppy play dates but don't know who to ask? Dog Meet Dog is the newest Social Platform for Dog Owners and solves all those problems! Create a User Account, and add your pets! Then begin creating posts with content and photos! Users will even be able to comment on other's posts as well! What are you waiting for? Download Dog Meet Dog today!

## Tables of Contents:
* [Technologies](#technologies)
* [NPM Packages](#npm-packages)
* [Screenshot](#screenshot)
* [Installation](#installation)
* [Usage](#usage)
* [Author(s)](#authors)
* [Contact Info](#contact-info)

## Technologies:
* HTML
* CSS
* JavaScript
* Node / [NPM Packages](#npm-packages)

## NPM Packages:
* [bcrypt v5.0.1](https://www.npmjs.com/package/bcrypt)
* [bootstrap v5.1.3](https://www.npmjs.com/package/bootstrap)
* [cloudinary v1.30.0](https://www.npmjs.com/package/cloudinary)
* [connect-session-sequelize v7.1.4](https://www.npmjs.com/package/connect-session-sequelize)
* [dotenv v16.0.1](https://www.npmjs.com/package/dotenv)
* [express v4.18.1](https://www.npmjs.com/package/express)
* [express-handlebars v6.0.6](https://www.npmjs.com/package/express-handlebars)
* [express-session v1.17.3](https://www.npmjs.com/package/express-session)
* [handlebars v4.7.7](https://www.npmjs.com/package/handlebars)
* [multer v1.4.5-lts.1](https://www.npmjs.com/package/multer)
* [mysql2 v2.3.3](https://www.npmjs.com/package/mysql2)
* [sequelize v6.20.1](https://www.npmjs.com/package/sequelize)

## Screenshot:
* [Heroku Link:](https://dog-meet-dog-blog.herokuapp.com/)

* Screenshot:

![This is the home page for the Dog Meet Dog Application!](/public/images/screenshot.jpg)

* Gif:

![This is a runthrough GIF of the hompage for Dog Meet Dog!](/public/images/Simple%20Home%20Page%20GIF.gif)


## Installation:
* Download the zip file, or clone to your local machine.
* Open a new terminal in the correct directory, and run command: `npm i`
* Create a `.env` file; Populate the file with corresponding data: `DB_NAME` `DB_USER` - `DB_PW`  on separate lines, and insert your appropriate credentials.

## Usage:
* After you finish installation procedures, enter the following command in the terminal: `mysql -u (*insert username*) -p`
* Please enter your MySQL password when prompted.
* In the MySQL command line, use command: `source db/schema.sql;` to create the proper database.
* After the prompt displays the database was created, use command: `quit;` to exit the MySQL Command Line.
* Lastly, use commands: `npm run seed` - `npm start` to seed your Database, and to start the server respectively.

## Author(s):
* Alex Pappagallo 
* Andrew Kim
* Caitlin Clifford
* Jeffrey Young

## Contact Info:
* [Alex's GitHub](https://github.com/AlexPap1)
* [Andrew's GitHub](https://github.com/AndrewKim123)
* [Caitlin's GitHub](https://github.com/cmc496)
* [Jeffrey's GitHub](https://github.com/jeffymiyoung)

---
© 2022 Dog Meet Dog
