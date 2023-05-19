import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./component/network/Header/Header";
import Navbar from "./component/network/Navbar/Navbar";
import Profile from "./component/network/Profile/Profile";
import Dialogs from "./component/network/Dialogs/Dialogs";
import Icon from './asserts/spider-man.jpeg';

function App() {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
            <Routes>
            <Route exact path="/profile" Component={Profile}/>
            <Route path="/dialogs" Component={Dialogs}/>
            </Routes>
            </div>    
        </div>
        </BrowserRouter>
    );
}

export default App;
