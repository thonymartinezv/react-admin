import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch, Redirect, useLocation } from "react-router-dom";
import Login from './modules/login/Login'
import Admin from './modules/admin/admin'
import { getToken } from './models/Token'
import Users from './models/Users'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false,
      load: false,
      logged: false,
    }
  }

  componentDidMount() {
    this.logged()
  }

  logged = () => {
    if (getToken()) {
      var usersModel = new Users()
      this.setState({ load: false })
      usersModel.logged().then(response => {
        if (response === "ok") {
          this.setState({ load: true, logged: true })
        } else {
          this.setState({ load: true, logged: false })
        }
      }).catch(err => {
        console.log(err);
        this.setState({ load: true, logged: false })
      })
    } else {
      this.setState({ load: true, logged: false })
    }
  }
  


  render() {
    if (!this.state.load) {
      return (
        <div className="container max-height">
          <div className="row justify-content-center align-items-center min-100">
            <div className="spinner-border text-dark" style={{ width: "30vh", height: "30vh", borderWidth: "2.5vh" }} role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      )
    }
    return (
      <Router>
        {!this.state.logged ? <Redirect to="/login" /> : <RouteLogged />}
        <Switch>
          <Route exact path={"/login"}><Login logged={this.logged} isLogged={this.state.logged} /></Route>
          <Admin />
        </Switch>
      </Router>
    );
  }
}

function RouteLogged() {
  const location = useLocation();
  if (location.pathname === "/login") {
    return <Redirect to="/" />
  }
  return null
}


export default App;
