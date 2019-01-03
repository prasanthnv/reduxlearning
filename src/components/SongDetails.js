import React from 'react';
import {connect} from 'react-redux';
const songDetails = ({song}) => {
    if(song)
            return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{song.title}</h5>
                        <p className="card-text">{song.duration}</p>
                    </div>
                </div>
        );
        else{
return <div>Select Song</div>
        }
}

const mapStateToProps = state => {
    return {
        song: state.selectedSong
    }
}

export default connect(mapStateToProps)(songDetails);