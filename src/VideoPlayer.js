import React from 'react';

class VideoPlayer extends React.Component {
  videoRef = React.createRef();

  render() {
    return (
      <div className="video-container">
        <video controls>
            <source src={`${process.env.PUBLIC_URL}/Hannah-video.webm`} type="video/webm" />
            Your browser does not support the video tag.
            </video>
      </div>
    );
  }
}

export default VideoPlayer;