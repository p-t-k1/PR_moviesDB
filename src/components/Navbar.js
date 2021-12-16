import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {

    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
            document.getElementById("navbarBackground").style.backgroundColor = "rgba(0, 0, 0, 1.0)";
        } else {
            document.getElementById("navbarBackground").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
        }
    }

    return (
        <div id="navbarBackground">

                <Link to="/" id="navbarText"><img src="https://i.ibb.co/N9G2tKF/logo.png"/></Link>
                <Link to="/top" id="navbarText"><span>Najlepsze</span></Link>
                <Link to="/add" id="navbarText"><span>Dodaj film</span></Link>
                <Link to="/" id="navbarText"><img id="searchIcon" src="https://hbogo.pl/assets/img/search.svg"/><input id="movieTitleInput" type="text"/></Link>
                <Link to="/signin" className="navbarLogin"><span>Zaloguj się</span></Link>

        </div>
    );
};

export default Navbar;