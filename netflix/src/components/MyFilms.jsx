import '../styles/MyFilm.scss';
import { setFavouriteFilms } from '../redux/slices/slice';
import { useRef, useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { handleClick } from '../func/func';
import { useSelector, useDispatch } from 'react-redux';
function MyFilms({}) {
  let [click, setClick] = useState(0);
  const [Visible, setVisible] = useState(false);
  const MyRef = useRef();
  const favouriteFilms = useSelector(state => state.slice.favouriteFilms);
  const dispatch = useDispatch();
  function Delete(el) {
    const updatesToDo = favouriteFilms.filter(item => {
      return item !== el;
    });
    return updatesToDo;
  }

  function Handler(el) {
    if (favouriteFilms.includes(el)) {
      dispatch(setFavouriteFilms(Delete(el)));
    }
  }

  console.log(favouriteFilms);
  return (
    <div className="list">
      <h1>My List</h1>
      {favouriteFilms.length !== 0 ? (
        <div className="wrapperr">
          <ArrowBackIosIcon
            style={{ display: !Visible && 'none' }}
            className="Arrowprevv"
            onClick={() => handleClick('left')}
          />

          <div className="container" ref={MyRef}>
            {favouriteFilms.map((el, i) => {
              return (
                <div key={i} className="listItemss">
                  <div
                    className="img"
                    style={{
                      backgroundImage: `url(${`http://image.tmdb.org/t/p/w200/${el.backdrop_path}`})`
                    }}
                  ></div>
                  <div className="ItemInfo">
                    <div className="icons">
                      <PlayArrowIcon className="playBtn" />
                      <AddIcon className="AddBtn" />
                      <FavoriteBorderIcon className="LikeBtn" onClick={() => Handler(el)} />
                    </div>

                    <div className="text_info">
                      <h1 className="title">{el.title !== undefined ? el.title : el.name}</h1>
                      <span className="age">{`${Math.floor(Math.random() * (18 - 7) + 7)}+`}</span>
                      <span className="seasons">
                        {' '}
                        {`${Math.floor(Math.random() * (6 - 2) + 2)}  Seasons`}
                      </span>
                    </div>
                    <div className="disc">{el.overview}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="a">
            <ArrowForwardIosIcon
              style={{ display: favouriteFilms.length < 5 && 'none' }}
              onClick={() => handleClick('right', MyRef)}
              className="Arrownext"
            />
          </div>
        </div>
      ) : (
        <h1 className="nothing">Ничего не добавлено</h1>
      )}
    </div>
  );
}

export default MyFilms;
