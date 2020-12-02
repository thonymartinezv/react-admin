import Home from './home/Home'
import * as Icon from 'react-bootstrap-icons';

export var routes = [
    {
        to: '/',
        name: 'Inicio',
        component: <Home />,
        icon:Icon.GridFill
    },
    {
        to: '/settings',
        name: 'Opciones',
        component: (<div className="container min-100">
            <div className="row justify-content-center align-items-center min-100">
                <h1>Opciones</h1>
            </div>
        </div>),
        icon:Icon.GearFill
    },
    {
        to: '/register',
        name: 'Registrar',
        component: (<div className="container min-100">
            <div className="row justify-content-center align-items-center min-100">
                <h1>Registrar!!!</h1>
            </div>
        </div>),
        icon:Icon.PersonPlusFill
    }
]