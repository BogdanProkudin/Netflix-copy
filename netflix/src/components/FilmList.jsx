import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import '../styles/FilmList.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { setFavouriteFilms, setClickCount, setArrowVisible } from '../redux/slices/slice.js'; // Импортируйте действия (actions) из вашего Redux среза (slice)
import FilmsRow from './FilmsRow';
import Sort from './Sort';
import { handleClick } from '../func/func';
const FilmList = ({ CategoryName, id }) => {
  const listRef = useRef(null);

  const dispatch = useDispatch();

  const [films, setFilms] = useState([]);

  const arrowVisible = useSelector(state => state.slice.ArrowVisible);

  return (
    <div className="list">
      <div className="Title">
        <h1 style={{ color: 'white' }} id={id}>
          {CategoryName}
        </h1>
        <Sort films={films} setFilms={setFilms} />
      </div>

      <div className="wrapper">
        <ArrowBackIosIcon className="Arrowprev" onClick={() => handleClick('left', listRef)} />
        <FilmsRow films={films} setFilms={setFilms} ListRef={listRef} />

        <div className="a">
          <ArrowForwardIosIcon
            onClick={() => handleClick('right', listRef)}
            className="Arrownext"
          />
        </div>
      </div>
    </div>
  );
};

export default FilmList;
