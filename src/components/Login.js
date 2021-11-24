import logo from '../logo.svg';
import '../App.css';
import '../styles.css';

function Login() {
  return (
      <div id="bodyBackground">
          <div id="loginBox">
              <img src="https://i.ibb.co/N9G2tKF/logo.png"/>
              <span id="loginText">Zaloguj się</span>
              <span id="loginTextSmall">E-mail</span>
              <input type="text" className="loginInput"/>
              <span id="loginTextSmall">Hasło</span>
              <input type="password" className="loginInput"/>
              <div id="loginButton">
                  Zaloguj się
              </div>
              <div id="registerButton">
                  Nie masz jeszcze konta?
              </div>
          </div>
      </div>
  );
}

export default Login;
