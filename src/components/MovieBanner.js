import logo from '../logo.svg';
import '../App.css';
import '../styles.css';
import {Link} from "react-router-dom";
import React from "react";

function MovieBanner(props) {

    let image = props.image
    if (image == null) {
        image = 'https://koncowkizbudowy.pl/storage/no-images.png'
    }

    return (
        <div id="movieBannerDiv">
            <Link
                to='/details'
                state={{id:props.id}}
                style={{textDecoration: 'none'}}
            >
                <div id="movieThumbnail">
                    <img src={image}/>
                </div>
                <div id="movieDesc">
                    <span id="movieTitle" title="Władca Pierścieni: Drużyna Pierścienia">{props.title}</span><br/>
                    <span id="movieInfo" title="2001 | przygodowy, fantasy, fantastyczny">{props.content}</span>
                </div>
            </Link>
        </div>
    );
}

export default MovieBanner;
