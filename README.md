#mvp
This is a 2-day solo project I completed as a student at [hackreactor](http://hackreactor.com). 

### Project Introduction
To facilitate job search, I came up with this idea of creating a centralized job search site which allows you to view positions from different sites and save the positions you apply for and positions you are interested in with a mouse click. You will never lose track of your applications anymore.

### How to Run the Project
* clone the repo -> cd into the root directory
* run 'npm install'
* run 'npm start'
* run 'npm run react-dev'
* open a web browser and type in '127.0.0.1:3000' to start the application

### Technologies Used
* front-end: React
* back-end: Express
* database: MongoDb and Mongoose(ORM)

### More
* It uses Github job search API to retrieve job positions (Note: I plan to use more job search APIs but most of them require a membership. Currently, I am only using Github API for demo)
* It has a drop-down list which allows users to filter 'applied positions' and 'interested positions'.
* It displays a list of job positions.
* It allows users to type in 'location' and 'keywords in job description' to search specific jobs.
* Each job position has a 'add to applied' and 'add to interested' button. 
* All applied positions and interested positions are stored in MongoDB.
