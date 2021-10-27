# tech-blog

![License: MIT](https://img.shields.io/badge/License-MIT-blueviolet.svg)

## An MVC-Structured Blog Site for Developers to Share Technical Concepts, Recent Advancements &amp; New Technologies 

## User Story

As a user interested in the tech field, I want to visit a social site where I may read tech updates & experiences posted by my colleagues while also sharing my own input so that I may stay up to date on all advances in technology.

## Features

With the Tech Blog app, users can view a preview of recent blogposts on their homescreen. To view the entire blogpost along with comments & who wrote the post, users must create an account & log in. Once logged in, they are able to view the entire post, as well as post & delete their own comments. <br />
<br />
A user may also create their own posts when logged in & manage all of their posts via their dashboard i.e. they may edit & delete any of their own posts. <br />
<br />
This app is a full stack application that utilizes an MVC structure & RESTful APIs. This application supplies the user with every route (GET, DELETE, etc.), making this a fully dynamic, interactive UI & DB. The folders are also concise & organized in a way that any developer could easily come in & edit / update as necessary & without difficulty.

## Table of Contents
  - [Installation](#installation)
  - [Languages](#languages-and-technologies-used)
  - [Questions](#questions)
  - [Contributors](#contributors)
  - [License](#license)
  - [Author](#author-notes)
  - [Screenshots](#application-screenshots)

## Installation

### Deployed Application

Users can access the deployed application HERE : https://sheltered-journey-74962.herokuapp.com/

### Clone Repository

Git clone git@github.com:lyndseyjw/tech-blog.git

### Install Dependencies

All NPM packages required for this application are listed as dependencies in the package.json file. Run "npm i" in your terminal at the root directory to install all packages. Ensure you have Node.js installed on your machine. You must also create a .env file to store your DB name, user and password information. The application is invoked using 'npm run start' in the command line.

### Start Application

Once you see 'app is now running on Port 3000', you can view the app on http://localhost:3000/

## Languages and Technologies Used

Handlebars, CSS, Javascript, Node, NPMs, Express, Sequelize, mySQL, Heroku, Restful-APIs, Session-Cookie

## Questions

You may visit my Github at : https://github.com/lyndseyjw OR email lyndseyjwatson@gmail.com if you have any questions.

## Contributors

Lyndsey Watson

## License

This project is licensed under the terms of the MIT license. 

## Author Notes

This application was a wonderful challenge of my MVC knowledge. It really test my ability to understand the logic & flow of a full stack web application. I realized by greatest strength is within frontend javascript. I absolutely love dynamically manipulating the DOM but found that this can cause quite a bit of confusion when the answer might simply be to render a new handlebars page. I had to swallow my pride & resist making complex frontend javascript files in order to make a concise MVC structure that would be user friendly & functional. <br />
<br />
I had a lot of fun working on this despite many of the struggles as the end result was well worth all the effort. I appreciate the many (many, many) failures because they helped strengthen my de-bugging skills & eye for detail. Something as simple as misnaming a route can throw off the entire application & helped me implement strict 'singular noun' rules that I will carry throughout my career.

## Application Screenshots

Tech-Blog Homepage :
![Homepage](./assets/homepage.png)

Login Page (all users must login OR sign up before they can see blogpost content, comment, create posts, etc.)
![Login Page](./assets/login.png)

Dashboard (a user may see all previous posts along with comments from other users)
![Dashboard](./assets/dashboard.png)
