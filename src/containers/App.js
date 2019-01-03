import React, { Component } from 'react'
import SongsList from './SongList';
import SongDetails from '../components/SongDetails';


const App = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6">
                <SongsList></SongsList>
                </div>
                <div className="col-sm-6">
                <SongDetails></SongDetails>
                </div>
            </div>
        </div>

    )
}

export default App;
