import { useState } from 'react';
function MovieCard({ el }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showContent, setShowContent] = useState(false);

  let hoverTimeout;

  const handleMouseEnter = () => {
    hoverTimeout = setTimeout(() => {
      setIsHovered(true);
      setShowContent(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setIsHovered(false);
    setShowContent(false);
  };
  return (
    <div onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
      {console.log(isHovered)}
      {isHovered === true && (
        <video
          onMouseLeave={() => setIsHovered(false)}
          className="video"
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          autoPlay
          muted
          loop
        ></video>
      )}
      {isHovered === false && (
        <div
          className="img"
          style={{
            backgroundImage: `url(${`http://image.tmdb.org/t/p/w200/${el.backdrop_path}`})`
          }}
        ></div>
      )}
    </div>
  );
}

export default MovieCard;
