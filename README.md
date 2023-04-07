# Hack News

This is a sample React application that uses the Currents API to display articles. The purpose of this project is to serve as a learning resource for React developers who are looking to build applications that consume APIs.

## Installation

To get started with this project, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone
```

2. Install the dependencies

```bash
cd hacknews
npm install
```

3. Register in Currents API and Get the api key
   https://currentsapi.services/en

4. Create a .env file in the root directory of the project with your Currents API key:

```makefile
REACT_APP_NYT_API_KEY=your_api_key_here
```

5. Start the development server:

```bash
npm run start
```

6. Open your web browser and go to http://localhost:3000 to see the app.

## Features

This application allows you to:

- Search for the latest articles from the Currents API
- Filter articles by category
- Bookmark an article
- Change language of articles between English and Portuguese

## Features

This project was built using:

- React
- React Router
- React Context API
- React Bootstrap
- Axios
- Currents API

## Learning Objectives

- Build a React application that consumes an external API
- Implement filter functionality in React
- Manage application state using the Context API
