import React from "react";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Sidebar, Navbar } from './components/Main'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {routes} from './components/route'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      toggled:false,
      id:0
    }
  }
  render(){
    return (
      <Router>
        <div className={"d-flex "+(this.state.toggled?"toggled":"")} id="wrapper">
          <Sidebar name="React - Admin" links={routes} />
          <div className="content" id="page-content-wrapper">
            <Navbar 
              toggled={()=>{
                let toggled = !this.state.toggled
                this.setState({toggled})
              }}
            />
            <Switch>
              {routes.map(item=>{
                return(<Route exact path={item.to}>{item.component}</Route>)
              })}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
