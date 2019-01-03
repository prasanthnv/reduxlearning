import React from 'react';


const SongListItem = (props) => {
    return (
        <div className="list-group-item">
            <h6 className="float-left">{props.title}</h6>
            <button className="btn btn-primary float-right btn-sm" onClick={props.selected}>
                Select
            </button>
        </div>
    );
}

export default SongListItem;