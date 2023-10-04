import FilmList from './FilmList';
import MyFilms from './MyFilms';
import PreviewScreen from './PreviewScreen';
import video from '../logo/video.mp4';

function Body() {
  return (
    <div className="center">
      <PreviewScreen />
      <FilmList id="popular" CategoryName={'Popular'} />
      <FilmList id="Films" CategoryName={'Films'} />
      <FilmList id="Movie" CategoryName={'Movie'} />
      <MyFilms />
    </div>
  );
}

export default Body;
