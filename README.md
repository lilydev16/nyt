# NYT Top Stories

## Overview

NYT Top Stories is the place to get your daily news. 

### Endpoints
This is a React application built using the `/home` endpoint from the [New York Times Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview). These are examples of the API's endpoints:

```
https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=yourkey
https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yourkey
https://api.nytimes.com/svc/topstories/v2/science.json?api-key=yourkey
https://api.nytimes.com/svc/topstories/v2/us.json?api-key=yourkey
https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey
```

### Planning
- Kanban system via [GH Projects](https://github.com/lswatson16/nyt/projects/2)
- Wireframes

# Learning Goals
- React fundamentals
- React Router to build a multipage application
- REST APIs
- Asynchronous JavaScript
- Acceptance testing & End-to-End (E2E) testing via Cypress

# Getting Started
To get a local copy up and running follow these simple steps.

## Installation

1. In your terminal, clone the repo
   ```sh
   git clone git@github.com:lswatson16/nyt.git
   ```
2. `cd` into the root directory
    ```sh
   cd nyt
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the server to view the application in the browser
   ```sh
   npm start
   ``` 
   - Runs the app in the development mode.
   - Open http://localhost:3000 to view it in the browser.
   - The page will reload if you make edits.

# Features

## Filter Search

A user can type into the controlled form to find an article based on the keyword typed in the search input.

![SearchForm](https://media.giphy.com/media/1yvl9jL9uDEog9N9sA/giphy.gif)

## Article Details

After searching for an article, you can select an article to find out more information. After selecting an article, you will be navigated to a details page. Here you can view additional details such as a link to the New York Times article.

![Details_Page](https://media.giphy.com/media/oiEDfhNsccTEsz0dl5/giphy.gif)
# Future Additions

- Add a favoriting/bookmarking functionality and a bookmarks page
- Utilize the additional endpoints 
- Add styling & responsive design

# Technologies Used 
- React
- React Router
- Cypress
- Javascript
- HTML
- CSS
- React Dev Tools (Chrome Dev Tools)

## Accessibility
Lighthouse (Chrome Dev Tools)

![Screen Shot 2022-06-02 at 2 58 47 PM](https://user-images.githubusercontent.com/93230374/171768104-30201898-8261-4824-9478-d3444ad744b0.png)

# Deployment
<!-- Skip installation by using this deployment link to view the application: [NYT]()

- No installlation is needed  with the provided deploy link.
- The application was deployed using [Heroku](https://www.heroku.com/). -->

# Contributors
- [Lauralyn Watson](https://github.com/lswatson16)

# Credits
<!-- - [Heroku](https://www.heroku.com/) -->
- [Create React App](https://create-react-app.dev/)
- [React](https://reactjs.org/)
- [Cypress.io](https://docs.cypress.io/guides/overview/why-cypress)
- [React Router v5](https://v5.reactrouter.com/web/guides/quick-start)
