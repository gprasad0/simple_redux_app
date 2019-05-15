import { combineReducers } from 'redux';

const songReducer = () => {
  return [
    { title: "No scrubs", duration: "4:05" },
    {
      title: "Macarena",
      duration: "2:30"
    },
    {
      title: "100",
      duration: "2:56"
    },
    {
      title: "23",
      duration: "1:24"
    }
  ];
};

const selectedSongreducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
    songs:songReducer,
    selectedSong:selectedSongreducer
})