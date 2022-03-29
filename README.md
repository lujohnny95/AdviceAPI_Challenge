## Description
An Advice generator app built using React.js, which achieves design specifications and user requirements:
- View the optimal layout for the app depending on their device's screen size,
- See hover states for all interactive elements on the page,
- Generate a new piece of advice by clicking the dice icon.

Two methods of fetching data has been attempted successfully to achieve the final result (on two separate branches):
- Primary method: fetch and handle data asynchonously with the fetch method, then application of useState to manage state of data being rendered, standard CSS (flex) for styling - media queries for responsive design.
- Alternative method: application of React Query (with the useQuery hook) to fetch, handle, cache data asynchonously, with the use of styled-components for some components blended with standard CSS styling. The cached data can be accessed by the components and then rendered.

An integration test have been conducted to test: data being fetched and rendered when the "fetch advice" button is clicked. Test passed.

## View Project
- You can view the deployed site directly here: https://advice-api-dice.netlify.app/

## Install and Run Project
- Clone the repository,
- In the console, run npm install (npm i) to install the dependencies,
- Run npm start to run the website locally.
