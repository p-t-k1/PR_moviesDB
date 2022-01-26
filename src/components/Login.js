import logo from '../logo.svg';
import '../App.css';
import '../styles.css';
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

function Login() {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [info,setInfo] = useState('')

    const navigate = useNavigate()

    const validate = () => {
        if (login === "" || password === "") {
            alert('Uzupełnij wszystkie pola')
            return false
        }
        return true
    }

    const handleSubmit = (event) => {

        if(!validate()) return;

        event.preventDefault();
        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/user/auth',
            data: {
                login: login,
                password: password
            }
        }).then((response) => {
            console.log(response);
            setLogin('')
            setPassword('')
            localStorage.setItem('token',response.data.token)
            window.location.reload();
            navigate('/')
            //setInfo('Pomyślnie zalogowano ✅')
            //handleChangeRoute()
        }).catch((error) => {
            console.log(error);
            setInfo('Błąd podczas logowania')
        });
    };

  return (
      <div id="bodyBackground">
          <form onSubmit={handleSubmit}>
              <div id="loginBox">
                  <img src="https://i.ibb.co/N9G2tKF/logo.png"/>
                  <span id="loginText">Zaloguj się</span>
                  <span id="loginTextSmall">Login</span>
                  <input value={login} type="text" name="login" className="loginInput" onChange={e => setLogin(e.target.value)}/>
                  <span id="loginTextSmall">Hasło</span>
                  <input value={password} type="password" name="password" className="loginInput" onChange={e => setPassword(e.target.value)}/>
                  <button type="submit" id="loginButton">
                      Zaloguj się
                  </button>
                  <Link to="/signup" style={{ textDecoration: 'none' }}>
                      <div id="registerButton">
                          Nie masz jeszcze konta?
                      </div>
                  </Link>
                  <span id="successTextSmall" style={{color:"white"}}>{info}</span>
              </div>
          </form>
      </div>
  );
}

export default Login;
