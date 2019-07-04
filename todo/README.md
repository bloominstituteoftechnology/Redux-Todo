# Redux Todo App

[Visit Frontend](http://www.todo.saschamajewsky.de)
[Visit Backend](https://apirestnodeexpressmongo.herokuapp.com/)

A modern Frontend powered by JavaScript, React, React-Redux, Create-React-App and Axios.

The Frontend firstly relied on LocalStorage alone making it not a very effective web application across different devices, browsers or cache deletions.

Now the [RESTful backend](https://github.com/SaschaMajewsky/ApiRESTNodeExpressMongo) was added to bring a RESTful backend to the Todo List App and make it a fully fleshed web application.

The goal of the web app is to be very minimalistic and simple. A user can sign up, log in with just his name and then add todos, alter the status of todos and delete them. With the new backend the todos are persisted and always accessible under the username accross different browser or devices.

## Built With

### Backend

- [Node.js](https://nodejs.org/en/) - Allowing JavaScript to be run serverside outside of the browser
- [Express.js](https://expressjs.com/de/) - A lightweight and simple to use framework for web application on Node.js
- [Cors](https://www.npmjs.com/package/cors) - A Express.js middleware to handle [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) functions
- [Mongoose](https://mongoosejs.com/) - A tool for asynchronous operations and modeling for MongoDB to handle validation and boilerplate code easily
- [MongoDB](https://www.mongodb.com/de) - A document-based/JSON approach for databases using NoSQL

### Frontend

- [HTML](https://en.wikipedia.org/wiki/HTML) - Foundation of the webpage
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - Styling and sizing of the webpage
- [JSX](https://reactjs.org/docs/introducing-jsx.html) - Syntax extension to JavaScript for reactive DOM elements
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - Language used to make the webpage interactive
- [React.js](https://reactjs.org/) - JavaScript library for user interfaces
- [Create React App](https://github.com/facebook/create-react-app) Bootstrap to build out React apps fast
- [Redux](https://redux.js.org/) - A predictable state container for React
- [Redux-Thunk](https://github.com/reduxjs/redux-thunk) - Redux Middleware for asynchronous state operations
- [Axios](https://github.com/axios/axios) - Promised based HTTP client to make requests to the backend
- [MDBReact](https://mdbootstrap.com/) - Material Design Bootstrap Framework for React
- [Axios-Progress-Bar](https://www.npmjs.com/package/axios-progress-bar) - A library to incluse a progress bar into the webpage that makes visualizes to the user after a HTTP request how long it will take for him to wait

### Deployment

- [Github](https://github.com/) - A cloud platform for developing software applications and hosting Git remote repositories
- [Netlify](https://www.netlify.com/) - A platform for automating continues deployment of static websites and providing hosting as well as domain management
- [Heroku](https://heroku.com/) - A platform for building, running, hosting or scaling (backend) applications
- [mLab](https://mlab.com/) - A platform for mongoDB as a service. Provides free to use database solutions

### Tools

- [Git](https://git-scm.com/) - Free and open source distributed version control system to handle changes to code bases easily, rewind changes and work effectly as a team on a project
- [Visual Studio Code](https://code.visualstudio.com/) - Amazing open source lightweight IDE-like text editor for several programming languages with a huge variety of extensions
- [Nodemon](https://www.npmjs.com/package/nodemon) - Library for Node.js to automatically restart the server on changes to the codebase
- [Dotenv](https://www.npmjs.com/package/dotenv) - Library for Node.js to load environment variables from a .env file into process.env of Node.js
- [Rest Client](https://github.com/Huachao/vscode-restclient) - Extension for Visual Studio Code that makes HTTP Requests native and easy to use within Visual Studio Code through .rest files
- [Azure Cosmos DB](https://github.com/microsoft/vscode-cosmosdb) - Extension for Visual Studio Code that makes uses the MongoDB API thus can be used to interact with a local MongoDB for viewing, updating and deleting documents or collections

Thanks to the open source community providing all these powerful tools!

## How to use

The dependencies from package.json are installed through CLI with `yarn install`
The server is started through CLI with `yarn start`

## Authors

- **[Sascha Majewsky](https://github.com/SaschaMajewsky)**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
