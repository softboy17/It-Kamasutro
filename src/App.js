import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./component/network/Header/Header";
import Navbar from "./component/network/Navbar/Navbar";
import Profile from "./component/network/Profile/Profile";
import DialogsContainer from "./component/network/Dialogs/DialogsContainer";


function App(props) {
    return (

        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile store = {props.store} />} />
                    <Route path="/dialogs" element={<DialogsContainer store = {props.store} />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
