import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './components/Homepage';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Addmovie from "./components/Addmovie";
import Top from "./components/Top";


ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Navbar/>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/addmovie" element={<Addmovie/>} />
                <Route path="/top" element={<Top/>} />
                <Route path="/" exact element={<Homepage/>} />
            </Routes>
            <Footer/>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
