![Repo Size](https://img.shields.io/github/languages/code-size/TheAnimalConnection/star-pet.svg?style=for-the-badge) ![TOP_LANGUAGE](https://img.shields.io/github/languages/top/TheAnimalConnection/star-pet.svg?style=for-the-badge) ![FORKS](https://img.shields.io/github/forks/TheAnimalConnection/star-pet.svg?style=for-the-badge&social) 

# Star Pet

## Table of Contents

- [Description](#description)
- [Built With](#built-with)
- [Prerequisites](#prerequisite)
- [Installation](#installation)
- [Usage](#usage)
    

## Description




## Built With

<a href="https://www.w3schools.com/w3css/defaulT.asp"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="40px" width="40px" /></a>
<a href="https://www.w3schools.com/html/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a>
<a href="https://www.w3schools.com/js/default.asp"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a>
<a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a>
<a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a>
<a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>
<a href="https://www.figma.com/?fuid="><img src="https://github.com/devicons/devicon/blob/master/icons/figma/figma-original.svg" height="40px" width="40px" /></a>
<a href="https://material-ui.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a>
<a href="https://nodejs.org/en/"><img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-plain.svg" height="40px" width="40px" /></a>
## Getting Started

This project should be able to run in your favorite IDE. I used VS code while building it. 
<a href="https://code.visualstudio.com/"><img src="https://github.com/devicons/devicon/blob/master/icons/vscode/vscode-original-wordmark.svg" height="40px" width="40px" /></a>

### Prerequisites
Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

### Installation

1. Fork the repository
2. Copy the SSH key in your new repository
3. In your terminal type...  `git clone {paste SSH link}`
4. Navigate into the repository's folder in your terminal
5. Open VS Code (or editor of your choice) and open the folder
6. In the terminal of VS Code run `npm install` to install all dependencies
7.  Create a `.env` file at the root of the project and paste this line into the file:
8. Create a database named `animal_connections` in PostgresSQL
If you would like to name your database something else, you will need to change `animal_connections` to the name of your new database name in `server/modules/pool.js`
9. The queries in the database.sql file are set up to create all the necessary tables that you need, as well as a dummy data table to test the app. Copy and paste those queries in the SQL query of the database. If this is going to production, leave out the dummy data.
10. Run `npm run server` in your VS Code terminal
11. Open a second terminal and run `npm run client`

## Usage

Once everything is installed and running it should open in your default browser - if not, navigate to http://localhost:3000/#/.

This app was designed to be easy to use.
- once inside you will see a list off every project in the application
- toggle the projects to before and after as well as filter the projects by username and category
- clicking create new project will bring you to a form to start the creation event.
- when you click submit for new project you will be redirected to the main page with the newest project at the top.
- you can click into the projects from main page to view others or view/edit your own
- inside the project you have the ability to upload new photos, delete photos, set your before/after pics or delete the entire project
- There is also tabs at the top of the project page that lets you navigate between pages to look at you summary page just click the tab
- In the summary tab you can view or edit you own table that hold the information on the materials needed for the project


## Lay of the Land

There are a few videos linked below that show a walkthrough the client and sever setup to help acclimatize to the boilerplate. Please take some time to watch the videos in order to get a better understanding of what the boilerplate is like.


## Deployment
- Login Credentials for Heroku have been provided in the hand off document.
- If you need make changes you wish to push to the deployed app, you must login, go into the pet-star section, go to the deploy tab, and then manually deploy. You can reconfigure this to redeploy automatically if you wish, which is on the same page.
- Environment variables are kept on Heroku in the Settings tab, just click the Reveal Config Vars button
- To set up the DB, we used Postico, just plug the information from Heroku into a new favorite. The Information for this can be found in the Resources tab, by clicking the Postgres add on. From there it will bring you to a new page where you will go into the settings tab and click view credentials. 

- If you'd like to create new users (also a hacky way to change password) you must:
1. Go into the user router
1. Uncomment the route
1. Push changes and redeploy app
1. Register User
1. Comment out the route back in VSCode
1. Push changes
1. Redeploy
- There is probably a better way to do this, but that's what 