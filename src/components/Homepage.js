import logo from '../logo.svg';
import '../App.css';
import '../styles.css';
import MovieBanner from "./MovieBanner";
import {useEffect, useState} from "react";

const axios = require('axios');

function Homepage() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
        axios({
            method: 'get',
            url: 'https://pr-movies.herokuapp.com/api/movies',
        }).then((response) => {
            setMovies(response.data.filter(element=> (element.image && element.image!="" && element.image.includes("https://") && !element.image.includes("gfycat.com" ) && !element.image.includes("twimg.com")&& !element.image.includes("wallpaper" )&&!element.image.includes( "sql-inject")&& element.title!="SPAM")))
        }).catch((error) => {
            console.log(error);
        });
    },[]);

    return (
        <div id="bodyBackground">
            <div id="headerImage"></div>
            <div id="allMoviesBox">
                <div id="allMoviesBoxText">
                    Wszystkie filmy
                </div>
                <div id="allMovies">
                    {movies.map((movie) =>
                            <MovieBanner title={movie.title} image={movie.image} content={movie.content} id={movie.id} key={movie.id}/>
                    )}


                </div>
            </div>
        </div>
    );
}

export default Homepage;
