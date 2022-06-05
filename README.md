# Task Tracker

This is a small react review project I did in June 2022.

This project includes a react frontend, a json-server backend, and routing by react-router-dom.

I followed code samples provided in these videos:
- [React JS Crash Course](https://www.youtube.com/watch?v=w7ejDZ8SWv8)
- [React Router v6 Major Changes](https://www.youtube.com/watch?v=k2Zk5cbiZhg)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Some things I reviewed
- components 
  - functional vs class, used functional in this project
  - default props
  - prop types (isRequired, types)
- events (click, double-click)
  - e.preventDefault()
- useState, useEffect
- await, async, fetch
- react-router-dom
  - Link
  - useLocation
  - useNavigate
  - useParams
  - Router, Routes, Route
- npm run build

## Some things to review
- CSS
- event object (when to use target, when to use currentTarget, etc)
- class component lifecycle
- await, async, promises
- redux
- deployment

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run server`

Creates a simple server on port 5000. Open [http:/localhost:5000/tasks]([http:/localhost:5000/tasks) to see the tasks in the db.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.