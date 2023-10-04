import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import '../styles/FilmList.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { setFilms, setFavouriteFilms, setArrowVisible } from '../redux/slices/slice.js';
import { isEqual } from 'lodash';

import { useState } from 'react';
import MovieBoard from './MovieBoard';
function FilmsRow({ ListRef, films, setFilms }) {
  const favouriteFilms = useSelector(state => state.slice.favouriteFilms);

  const dispatch = useDispatch();
  React.useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/all/week?api_key=f7c611f5d1fc2c15c728bf86f5d1b404'
    ).then(res => {
      res.json().then(data => {
        setFilms(data.results);
      });
    });
  }, []);

  function Delete(el) {
    const updatesToDo = favouriteFilms.filter(item => {
      return item !== el;
    });
    return updatesToDo;
  }

  function Handler(el) {
    console.log(favouriteFilms, favouriteFilms.indexOf(el.title) !== -1);

    const index = favouriteFilms.findIndex(f => f.title === el.title && f.id === el.id);
    if (index === -1) {
      dispatch(setFavouriteFilms([...favouriteFilms, el]));
    }

    if (favouriteFilms.includes(el)) {
      dispatch(setFavouriteFilms(Delete(el)));
    }
  }

  return (
    <div>
      {' '}
      <div className="container" ref={ListRef}>
        {films.map((el, i) => {
          return (
            <div key={i} className="listItems">
              <MovieBoard el={el} />
              <div className="ItemInfo">
                <div className="icons">
                  <PlayArrowIcon className="playBtn" />
                  <AddIcon className="AddBtn" />
                  <FavoriteBorderIcon onClick={() => Handler(el)} className="LikeBtn" />
                </div>

                <div className="text_info">
                  <h1 className="title">{el.title !== undefined ? el.title : el.name}</h1>
                  <span className="age">{`${Math.floor(Math.random() * (18 - 7) + 7)}+`}</span>
                  <span className="seasons">
                    {`${Math.floor(Math.random() * (6 - 2) + 2)}  Seasons`}
                  </span>
                </div>

                <div className="disc">{el.overview}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FilmsRow;
