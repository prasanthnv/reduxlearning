import React from 'react';
const songDetails = (props) => {
    if(props.song){
            return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{props.song.title}</h5>
                        <p className="card-text">{props.song.duration}</p>
                    </div>
                </div>
        );
             } else{
return ''
        }
}

export default songDetails;