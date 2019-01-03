import { combineReducers } from 'redux'
const songsReducer = () => {

    return [
        { title: 'No scrubs', duration: '4.05' },
        { title: 'Macarena', duration: '3.40' },
        { title: 'All star', duration: '4.34' },
        { title: 'I want it that way', duration: '4.36' }
    ]
};


const selectedSongReducer = (selectdSong = null, action) => {
    switch (action.type) {
        case 'SONG_SELECTED':
            return action.payload
        default:
            return selectdSong
    }
};


const rootReducer = combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

export default rootReducer;