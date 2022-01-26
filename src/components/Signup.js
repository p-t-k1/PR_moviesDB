import logo from '../logo.svg';
import '../App.css';
import '../styles.css';
import {useState} from "react";
import axios from "axios";

function Signup() {

    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [info,setInfo] = useState('')

    const validate = () => {
        if (login === "" || email === "" || password === "") {
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
            url: 'https://pr-movies.herokuapp.com/api/user/create',
            data: {
                name: login,
                email: email,
                password: password
            }
        }).then((response) => {
            console.log(response);
            setLogin('')
            setPassword('')
            setEmail('')
            setInfo('Pomyślnie utworzono konto ✅')
            //handleChangeRoute()
        }).catch((error) => {
            console.log(error);
            setInfo('Błąd podczas logowania')
        });
    };

    /*const handleChangeRoute = () => {
        history.push('/');
    };*/

    return (
        <div id="bodyBackground">
            <form onSubmit={handleSubmit}>
                <div id="registerBox">
                    <img src="https://i.ibb.co/N9G2tKF/logo.png"/>

                    <span id="loginText">Utwórz nowe konto</span>
                    <span id="loginTextSmall">Login</span>
                    <input value={login} type="text" name="login" className="loginInput" onChange={e => setLogin(e.target.value)}/>
                    {/*<span id="loginTextSmall">Nazwa</span>
                  <input type="text" name="nazwa" className="loginInput"/>*/}
                    <span id="loginTextSmall">E-mail</span>
                    <input value={email} type="text" name="email" className="loginInput" onChange={e => setEmail(e.target.value)}/>
                    <span id="loginTextSmall">Hasło</span>
                    <input value={password} type="password" name="password" className="loginInput" onChange={e => setPassword(e.target.value)}/>
                    <button type="submit" id="loginButton">
                        Załóż konto
                    </button>
                    <div id="registerButton">
                        Potrzebujesz pomocy?
                    </div>
                    <span id="successTextSmall">{info}</span>
                </div>
            </form>
        </div>
    );
}

export default Signup;
