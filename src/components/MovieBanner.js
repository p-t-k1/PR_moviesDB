import logo from '../logo.svg';
import '../App.css';
import '../styles.css';
import {Link} from "react-router-dom";
import React from "react";

function MovieBanner() {
    return (
        <div id="movieBannerDiv">
            <Link to="/details" style={{ textDecoration: 'none' }}>
                <div id="movieThumbnail">
                    <img src="//cdn.hbogo.eu/images/3F0EE965-6302-4AAF-ABBB-1B6D25F0803B/295_421.jpg"/>
                </div>
                <div id="movieDesc">
                    <span id="movieTitle" title="Władca Pierścieni: Drużyna Pierścienia">Władca Pierścieni: Drużyna Pierścienia</span><br/>
                    <span id="movieInfo" title="2001 | przygodowy, fantasy, fantastyczny">2001 | przygodowy, fantasy, fantastyczny</span>
                </div>
            </Link>
        </div>
    );
}

export default MovieBanner;
