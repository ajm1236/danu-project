import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './App.css';

class Video extends Component {
    render () {
        return (
          //className='player-wrapper'>
          <center>
          <div className="player-wrapper">  
            <h1>Danu Sports</h1>
            <h3>Example Athelete A</h3>
            <ReactPlayer
              className='react-player'
              url= 'videos/danu.MP4'
              width='50%'
              height='50%'
              playing={true}
              loop={true}
              controls = {true}/>
            <h4>
              Danu Sports strives to collaborate with the world’s best and most innovative teams to make the best wearable available to increase athlete performance, reduce injuries and even prevent them from ever happening in the first place. 
            </h4>
          </div>
          </center>
          
      )
    }
}

export default Video;