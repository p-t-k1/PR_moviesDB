import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './components/Homepage';
import reportWebVitals from './reportWebVitals';
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes, BrowserRouter, Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Addmovie from "./components/Addmovie";
import Top from "./components/Top";
import Details from "./components/Details";
import Signup from "./components/Signup";
import {isExpired} from "react-jwt";
import { createBrowserHistory } from "history";


const isNotLogged = isExpired(localStorage.getItem('token'));





ReactDOM.render(
    <Router >
        <React.StrictMode >
            <Navbar/>
                <Routes >
                    <Route path="/signin" element={!isNotLogged ? <Navigate to="/"/> : <Login/>}/>
                    <Route path="/signup" element={!isNotLogged ? <Navigate to="/"/> : <Signup/>}/>
                    <Route path="/add"
                           element={isNotLogged ? <Navigate to="/"/> : <Addmovie/>}
                    />
                    <Route path="/top" element={<Top/>}/>
                    <Route path="/details" element={<Details/>}/>
                    <Route path="/" exact element={<Homepage/>}/>
                    <Route path="*" exact element={<Homepage/>}/>
                </Routes>
            <Footer/>
        </React.StrictMode>
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
