import logo from '../logo.svg';
import '../App.css';
import '../styles.css';
import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

function Addmovie() {

    const [movieTitle, setMovieTitle] = useState('');
    const [movieContent, setMovieContent] = useState('');
    const [movieImage, setMovieImage] = useState('');
    const [successMark, setSuccessMark] = useState(false)

    const validate = () =>{
        if(movieTitle ==="" || movieContent ==="" ||movieImage ===""){
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
            url: 'https://pr-movies.herokuapp.com/api/movies',
            data: {
                title: movieTitle,
                image: movieImage,
                content: movieContent
            }
        }).then((response) => {
            console.log(response);
            setSuccessMark(true)
            setMovieTitle('')
            setMovieImage('')
            setMovieContent('')
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <div id="bodyBackground">
            <form onSubmit={handleSubmit}>
                <div id="loginBox">
                    <img src="https://i.ibb.co/N9G2tKF/logo.png"/>
                    <span id="loginText">Dodaj nowy film</span>
                    <span id="loginTextSmall">Tytuł</span>
                    <input value={movieTitle} type="text" name="title" className="loginInput" onChange={e => setMovieTitle(e.target.value)}/>
                    <span id="loginTextSmall">Opis</span>
                    <textarea value={movieContent} type="textarea" name="content" className="contentInput" onChange={e => setMovieContent(e.target.value)}/>
                    <span id="loginTextSmall">URL</span>
                    <input value={movieImage} type="text" name="image" className="loginInput" onChange={e => setMovieImage(e.target.value)}/>
                    <button type="submit" id="loginButton">
                        Dodaj film
                    </button>
                    {successMark && <span id="successTextSmall">Dodano ✅</span>}
                </div>
            </form>
        </div>
    );
}

export default Addmovie;
