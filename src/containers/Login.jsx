import React,{useState} from 'react'
import { connect } from 'react-redux' // Importa connect
import {Link} from 'react-router-dom'
import {loginRequest} from '../actions'
import '../assets/styles/components/Login.scss'
import googleIcon from '../assets/static/icons8-google-plus-50.png'
import twitterIcon from '../assets/static/icons8-twitter-50.png'
import Header from '../components/Header'

const Login = props =>  {
    const [form, setValues] = useState({ // Inicializa una variable form con la constante email y una función setvalues
        email: '',
    })

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value  // Estoys dos valores corresponderan al payload
            //target.name obtiene el nombre del target(input en este caso) que se esta editando
            //target.value obtiene el valor del target(input en este caso) que se esta editando
        })
    }

    const handleSubmit = event =>{ // Captura la inofrmación del form
        event.preventDefault() // Cancela el submit de html
        props.loginRequest(form) //Envia la información al reducer que se encargara de realizar la accion
        props.history.push('/')  // Permite moverse al lugar que se deseo dependiendo del uso de la aplcación
        
    }
    
    return(
        <>
            <Header isLogin />
            <section className="login">
                <section className="login__container">
                    <h2>Inicio Sesión</h2>
                    <form className="login__container--form"  onSubmit={handleSubmit}>

                        <input 
                            name="email"
                            className="input"  
                            type="text" 
                            placeholder="Correo"
                            onChange={handleInput}

                        />
                        <input 
                            name="password"
                            className="input"  
                            type="password" 
                            placeholder="Contraseña"
                            onChange={handleInput}

                        />

                        <button className="button">Iniciar sesión</button>
                        <div className="login__container--remember-me">
                            <label >
                                <input type="checkbox" name="" id="cbox1" value="checkbox"/>Recuerdame 
                            </label>
                            <a href="/">Olvide mi contraseña</a>                    
                        </div>
                    </form>
                <section className="login__container--social-media">
                    <div><img src={googleIcon} alt="google"/>Inicia sessión con google</div>
                    <div><img src={twitterIcon} alt="twitter"/>Inicia sessión con twitter</div>
                </section>
                <p className="login__container--register">
                    No tienes ninguna cuenta {' '}
                    <Link to="/register">
                        Regístrate
                    </Link>
                </p>
                </section>
            </section>
        </>
    )
}

const mapDispacthToProps = { //Envia informacion a los actions para que trabaje con ella
    loginRequest,
}

export default connect(null, mapDispacthToProps)(Login)