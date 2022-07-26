/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable react/function-component-definition */
import React from 'react'


const Login = () => {
  return (

        <div>
                <div>
                    <form className = "form-username">
                        <input className = "username" type="email" placeholder = "Email" />
                    </form>

                    <form className = "form-password">
                        <input className = "password" type="password" placeholder = "Password" />
                    </form>

                    <div className = "buttons">
                        <button type='button' className = "button is-primary login" >Login</button>
                    </div>
                </div>
        </div>


    )
  
}

export default Login