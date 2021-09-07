
# Getting Started with Create React App

  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

  

## Application Design

The Initial data is mocked using a mock API

Following components form the core of the application:
1. **ListView** - This is responsible for iterating through the Cells and displaying them.
2. **Modal** - This displays the budget and the budget spent and helps edit the budget

The Application state is managed under **state-management** folder which uses **useContext** & **useReducer** hooks of React.

File **constants.ts** contains a function to generate the initial state, After the state is generated it is stored in **LocalStorage** so no API call is made again and state can persists from localStorage.

State is an array of Rows `IRowProps`

 - **id**: Stores current rowIndex.
 - **company_name**: Stores current company name. 
 - **budget**: Stores current budget.
 - **budget_spent**: Stores budget spent. 
 - **budget_left**: Stores budget left.
 - **date**: Stores date of contract sign.

All the styles are stored in **.style.js** files as Styled-Components or as material styles. 

All the Test Cases are stored in **.test.js** files.Test cases are written using **Jest and React testing Library**.

## Available Scripts

In the project directory, you can run:


### `npm start`


Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  

The page will reload if you make edits.\

You will also see any lint errors in the console.

  

### `npm run build`

  

Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

  

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  
  

## Learn More

  

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

  

To learn React, check out the [React documentation](https://reactjs.org/).