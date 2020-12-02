import React from "react";
import { Sidebar, Navbar } from '../../components/Main'
import { Route, Switch } from "react-router-dom";
import { routes } from './route'

class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggled: false,
            id: 0
        }
    }
    render() {
        return (
            <div className={"d-flex " + (this.state.toggled ? "toggled" : "")} id="wrapper">
                <Sidebar name="React - Admin" links={routes} />
                <div className="content" id="page-content-wrapper">
                    <Navbar
                        toggled={() => {
                            let toggled = !this.state.toggled
                            this.setState({ toggled })
                        }}
                    />
                    <Switch>
                        {routes.map((item, index) => {
                            return (<Route key={index} exact path={item.to}>{item.component}</Route>)
                        })}
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Admin;