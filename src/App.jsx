import { useState } from 'react'
import bem_vindo from './img/bem_vindo.png'
import computador from './img/computador.png'
import logo from './img/logo.png'
import eye000 from './img/eye000.png'
import eye001 from './img/eye001.png'
import './style.css'



function App() {

  const [show, setShow]=useState(false)

const handleshow=()=>{
  setShow(!show)
}

  
  return (
   <body>
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">


          <span className = "logo">
            <img src={logo} alt = "tropa digital"/>
          </span>


          <span className = "login-form-title">
            <img src={bem_vindo} alt = "bem vindo ao painel"/>
          </span>

         

          <div className="wrap-input">
          <input className="input" type ="email" placeholder="Digite seu email"/><br/>
           </div>

          
            <div className="wrap-input">
          <input id = "password" className="input" type ={show?"text":"password"} placeholder="Digite sua senha"/>
           </div>

          <span className = "focus-input" data-placeholder="password"></span>

          <button className="login-form-btn">Acessar</button>

       

          

         

          </form>

    </div>
    </div>
</div>
<center>
   <span className = "password-show">
            <img id="eye" onClick={handleshow} src={show?eye001:eye000} alt = "show"/>
          </span>

        <span className = "computador">
           <img src={computador} alt = "computador"/>
          </span>  
          </center>

         
</body>


  )
}

export default App
