import logo from '../logo.svg';
import '../App.css';
import '../styles.css';
import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
const axios = require('axios');

function Details(props,route) {
    const location = useLocation()
    const { navigation } = props;
    let id = ''
    if(location.state !== null){
         id  = location.state.id
    }else{
        id=window.location.href.substr(window.location.href.indexOf('=')+1)
    }



    const [movieData, setMovieData] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
        axios({
            method: 'get',
            url: 'https://pr-movies.herokuapp.com/api/movies/'+id,
        }).then((response) => {
            setMovieData(response.data)
        }).catch((error) => {
            console.log(error);
        });
    },[]);

  return (
      <div id="bodyBackground">
          <div id="detailsBox">
              <div id="detailsBoxImage">
                  <img src={movieData.image}/>
              </div>
              <div id="detailsBoxInfo">
                  <span id="detailsTitle">{movieData.title}</span>
                  <br/>
                  <span id="detailsContent">{movieData.content}</span>
                  <br/>
                  <span id="detailsId">{movieData.id}</span>
              </div>
          </div>
      </div>
  );
}

export default Details;
