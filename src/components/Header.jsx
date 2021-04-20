import React from 'react'
import {connect} from 'react-redux' //Ayuda a proveer el estado al componente
import {Link} from 'react-router-dom' //Manejar enlaces
import classNames from 'classnames'
import gravatar from '../utils/gravatar.js'
import {logoutRequest} from '../actions' //actions que se encarga de cerrar sesión
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi.png'
import userIcon from '../assets/static/user-icon.png'
import { object } from 'prop-types'

const Header = props => { 
    const {user, isLogin, isRegister} = props
    // user al ser un objeto no se puede hacer uso de user.length
    //para eso se usa object.keys, ahí si puedo hacer uso de length para saber cuantas elementos tiene
    const hasUser = Object.keys(user).length > 0

    const handleLogout = () =>{ //Manja el cierre de sesión 
        props.logoutRequest({}) //Enviar el payload que es un objeto vacio
    }
    
    const headerClass = classNames('header',{
        isLogin, 
        isRegister,
    })

    return(
        <header className={headerClass}>
        <Link to ='/'>
            <img className="header__img" src={logo} alt="Platzi Video"/>
        </Link>

        <div className="header__menu">
            <div className="header__menu--profile">
                {
                    hasUser 
                    ?<img  src={gravatar(user.email)} alt ={user.email} />
                    :<img src={userIcon} alt="Usuario"/>
                }               
                <p>Perfil</p>
            </div>
            <ul>
            {
                hasUser
                ?<li>
                    <Link to = ""> 
                        {user.name} 
                    </Link>
                </li>
                :null
            }
            {
                hasUser?
                <li><a href="#logout" onClick={handleLogout}> Cerrar Sesión </a></li>
                :
                <li>
                    <Link to = "/login">
                        Iniciar Sesión
                    </Link>
                </li>                
            }               
            </ul>
        </div>        
        </header>    
)}

const mapSatateToProps = state => {//Mapea las propiedades que se estan pidiendo en este componente
    return{
        user: state.user
    }
}
const mapDispatchToProps = {//Se encarga de las acciones que se va a disparar
    logoutRequest,
}
export default connect(mapSatateToProps,mapDispatchToProps)(Header)
//connect conectas todas las propiedades que se estan pidiendo en este componente con las acciones, disparadores que se van a usar