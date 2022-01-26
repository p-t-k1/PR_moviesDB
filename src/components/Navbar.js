import React, {useEffect, useState} from "react";
import {Link, Navigate, useNavigate} from "react-router-dom";
import { isExpired, decodeToken  } from "react-jwt";
import axios from "axios";

const Navbar = () => {

    const user = decodeToken(localStorage.getItem('token'));
    const isNotLogged = isExpired(localStorage.getItem('token'));

    const [searchBar,setSearchBar] = useState('')
    const [movies, setMovies] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://pr-movies.herokuapp.com/api/movies',
        }).then((response) => {
            console.log(response.data);
            setMovies(response.data)
        }).catch((error) => {
            console.log(error);
        });
    },[]);

    const logout = (event) =>{
        axios({
            method: 'delete',
            url: 'https://pr-movies.herokuapp.com/api/user/logout/:userId',
            data: {
                userId: user.userId,
            }
        }).then((response) => {
            console.log(response);
            if(response.data.deletedCount==1){
                localStorage.removeItem('token')
                console.log('Wylogowano')
                window.location.reload();
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    const searchMovie = (event) =>{
        event.preventDefault()
        console.log('Szukam filmu: '+searchBar)
        const found = movies.find(element => element.title == searchBar)
        console.log(found)
       /* navigate('details', {
            screen: 'details',
            params: { id: found.id },
        });*/
        navigate('/details?id='+found.id,{id:found.id})

       //navigate('/details',{id:'61d84e9d58de31247499c96d'})
    }

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
                <Link to="/" id="navbarText"><img onClick={searchMovie} id="searchIcon" src="https://hbogo.pl/assets/img/search.svg"/><input id="movieTitleInput" type="text" onChange={e => setSearchBar(e.target.value)}/></Link>
                {isNotLogged && <Link to="/signin" className="navbarLogin"><span>Zaloguj się</span></Link>}
                {!isNotLogged &&<Link to="/" className="navbarLogin"><span onClick={logout}>Wyloguj się</span></Link>}

        </div>
    );
};

export default Navbar;