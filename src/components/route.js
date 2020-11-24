import Inicio from './Inicio'
import * as Icon from 'react-bootstrap-icons';

export var routes = [
    {
        to: '/',
        name: 'Inicio',
        component: <Inicio />,
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
        to: '/registrar',
        name: 'Registrar',
        component: (<div className="container min-100">
            <div className="row justify-content-center align-items-center min-100">
                <h1>Registrar!!!</h1>
            </div>
        </div>),
        icon:Icon.PersonPlusFill
    }
]