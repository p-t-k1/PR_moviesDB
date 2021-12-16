import logo from '../logo.svg';
import '../App.css';
import '../styles.css';

function Signup() {
  return (
      <div id="bodyBackground">
          <form>
              <div id="registerBox">
                  <img src="https://i.ibb.co/N9G2tKF/logo.png"/>

                  <span id="loginText">Utwórz nowe konto</span>
                  <span id="loginTextSmall">Login</span>
                  <input type="text" name="login" className="loginInput"/>
                  <span id="loginTextSmall">Nazwa</span>
                  <input type="text" name="nazwa" className="loginInput"/>
                  <span id="loginTextSmall">E-mail</span>
                  <input type="text" name="email" className="loginInput"/>
                  <span id="loginTextSmall">Hasło</span>
                  <input type="password" name="password" className="loginInput"/>
                  <button type="submit" id="loginButton">
                      Załóż konto
                  </button>
                  <div id="registerButton">
                      Potrzebujesz pomocy?
                  </div>
              </div>
          </form>
      </div>
  );
}

export default Signup;
