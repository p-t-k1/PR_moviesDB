import React, {useEffect, useState} from "react";
import {Link, Navigate, useNavigate} from "react-router-dom";
import { isExpired, decodeToken  } from "react-jwt";
import axios from "axios";
import search from '../search.png'
import logo from "../logofilmpro.png"

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
            if(response.data.deletedCount==1){
                localStorage.removeItem('token')
                window.location.reload();
            }
        }).catch((error) => {
            console.log(error);
        });
    }
    //todo naprawa szukania roznych filmow i tych ktoyvh nie ma
    const searchMovie = (event) =>{
        event.preventDefault()
        if(searchBar==""){
            return;
        }
        const moviecCleaned = movies.filter(element => element.title != undefined)
        const found = moviecCleaned.find(element => element.title.toLowerCase().includes(searchBar.toLowerCase()))
        if(found==undefined){
            alert("Nie znaleziono danego filmu")
            setSearchBar("")
            return false;
        }
        navigate('/details?id='+found.id,{id:found.id})
        setSearchBar("")
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

                <Link to="/" id="navbarText"><img src={logo}/></Link>
                <Link to="/top" id="navbarText"><span>Proponowane</span></Link>
                <Link to="/add" id="navbarText"><span>Dodaj film</span></Link>
                <Link to="/" id="navbarText"><img onClick={searchMovie} id="searchIcon" src={search}/><input id="movieTitleInput" value={searchBar} type="text" onChange={e => setSearchBar(e.target.value)}/></Link>
                {isNotLogged && <Link to="/signin" className="navbarLogin"><span>Zaloguj się</span></Link>}
                {!isNotLogged &&<Link to="/" className="navbarLogin"><span onClick={logout}>Wyloguj się</span></Link>}

        </div>
    );
};

export default Navbar;
