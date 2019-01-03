import React, { Component } from 'react';
import { connect } from 'react-redux';
import SongListItem from '../components/SongListItem';
import { selectSong } from '../actions';
import SongDetails from '../components/SongDetails';
class SongList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    songSelectHandler = (song) => {
        // console.log("Selected song => ", song);
        this.props.selectSong(song);
    }
    renderList() {
        return this.props.songs.map((song, key) => {
            return (
                <SongListItem title={song.title} key={key} selected={() => this.songSelectHandler(song)} />
            );
        })
    }
    render() {
        console.log(this.props)
        return (
     
                    <div className="list-group">
                        {this.renderList()}
                    </div>

        );
    }
}

const mapStatesToProps = state => {
    return {
        songs: state.songs
    };
}

export default connect(mapStatesToProps, {
    selectSong: selectSong
})(SongList);