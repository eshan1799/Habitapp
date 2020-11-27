import React, { Fragment, useState, useEffect } from "react";
import "./styles/App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Login from "./Containers/Login";
import Register from "./Containers/Register";
import Dashboard from "./Containers/Dashboard";
import WelcomePage from "./Containers/WelcomePage"
import Error404 from "./Containers/Error404"

toast.configure();

function App() {

  const checkAuthenticated = async () => {
      try {
        const res = await fetch("http://localhost:5000/auth/is-verify", {
          method: "GET",
          headers: { token: localStorage.token }
        });

        const parseRes = await res.json();
        parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);

      } catch (err) {
        console.error(err.message);
      }
    };

    useEffect(() => {
       checkAuthenticated();
     }, []);

     const [isAuthenticated, setIsAuthenticated] = useState(false);

     const setAuth = boolean => {
       setIsAuthenticated(boolean);
     };

    return (
      <Fragment>
        <div className="container">
          <Switch>
            <Route
            exact
            path='/'
            render={props =>  !isAuthenticated ? (<WelcomePage/>) : (<Redirect to="/dashboard"/>)}
            />
            <Route
              exact
              path="/login"
              render={props =>  !isAuthenticated ? (<Login {...props} setAuth={setAuth}/>) : (<Redirect to="/dashboard"/>)}
            />
            <Route
              exact
              path="/register"
              render={props =>  !isAuthenticated ? (<Register {...props} setAuth={setAuth}/>) : (<Redirect to="/dashboard"/>) }
            />
            <Route
              exact
              path="/dashboard"
              render={props =>  isAuthenticated ? (<Dashboard {...props} setAuth={setAuth}/>) : (<Redirect to="/"/>) }
            />
            <Route component={Error404} />
          </Switch>
        </div>
    </Fragment>
    );
}
export default App;
