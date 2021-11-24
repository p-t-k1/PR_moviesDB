import logo from '../logo.svg';
import '../App.css';
import '../styles.css';
import MovieBanner from "./MovieBanner";

function Homepage() {
    return (
        <div id="bodyBackground">
            <div id="headerImage"></div>
            <div id="allMoviesBox">
                <div id="allMoviesBoxText">
                    Wszystkie filmy
                </div>
                <div id="allMovies">
                    <MovieBanner/>
                    <MovieBanner/>
                    <MovieBanner/>
                    <MovieBanner/>
                    <MovieBanner/>
                    <MovieBanner/>
                    <MovieBanner/>
                    <MovieBanner/>
                    <MovieBanner/>
                    <MovieBanner/>
                    <MovieBanner/>
                    <MovieBanner/>
                    <MovieBanner/>
                    <MovieBanner/>
                    <MovieBanner/>
                    <MovieBanner/>
                    <MovieBanner/>
                    <MovieBanner/>
                    <MovieBanner/>
                    <MovieBanner/>
                    <MovieBanner/>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
