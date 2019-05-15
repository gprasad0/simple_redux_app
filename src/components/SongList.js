import React, { Component } from "react";
import { connect } from "react-redux";
class SongList extends Component {
  state = {
    visible: false
  };

  onClickSong = value => {
    this.setState({
      visible: true
    });
    return (
      <div>
        <h1>{value}</h1>
      </div>
    );
  };

  renderList = () => {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.onClickSong(song.title)}
            >
              SELECT
            </button>
          </div>
          <div className="content">{song.title}</div>
          <div>{this.onClickSong()}</div>
        </div>
      );
    });
  };

  render() {
    return (<div className="ui divided list">{this.renderList()}<div>{this.state.visible?this.onClickSong():"null"}</div></div>);
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
