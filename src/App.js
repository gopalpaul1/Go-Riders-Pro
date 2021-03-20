import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home';
import NoMatch from './Component/NoMatch/NoMatch';
import Destination from './Component/Destination/Destination';

import { createContext, useState } from 'react';
import Login from './Component/LogIn/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Header from './Component/Header/Header';
import DestinationDetails from './Component/DestinationDetails/DestinationDetails';


export const UserContext = createContext()

function App() {
  const [loggedInUser, serLoggedInUser] = useState({})
  return (

    <UserContext.Provider value={[loggedInUser, serLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/destination/:id">
            <Destination />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
