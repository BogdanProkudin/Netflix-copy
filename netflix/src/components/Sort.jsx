import '../styles/Sort.scss';

import { useSelector } from 'react-redux';
import { useState } from 'react';

function Sort({ films, setFilms }) {
  const sort = useSelector(state => state.Sort.sort);

  function SortPopular() {
    const SortedPopular = [...films].sort((a, b) => {
      return b.vote_average - a.vote_average;
    });

    setFilms(SortedPopular);
  }
  const [SortName, setSortName] = useState({ name: 'Popular' }, { name: 'release date' });

  function SortDate() {
    const Dates = [...films].map(date => {
      if (date.release_date !== undefined) {
        return date;
      }

      return date;
    });

    Dates.sort((a, b) => {
      return (
        new Date(b.release_date ? b.release_date : b.first_air_date) -
        new Date(a.release_date ? a.release_date : a.first_air_date)
      );
    });
    setFilms(Dates);
    console.log(films);
  }

  function ChangeActive(obj, id) {
    if (obj.name === 'Popular') {
      SortPopular(id);
    }

    if (obj.name === 'release date') {
      console.log('yes');
      SortDate();
    }
    setSortName(obj);
    setShow(!show);
  }
  const [show, setShow] = useState(false);
  const list = [
    { name: 'Popular', sortProperty: 'vote_average' },
    { name: 'release date', sortProperty: 'release_date' }
  ];
  return (
    <div className="flex">
      <b className="MainTitle">Sort By:</b>
      <span onClick={() => setShow(!show)} className="SortName">
        {' '}
        {SortName.name}
      </span>

      {show && (
        <div className="list_popup">
          <ul>
            {list.map((obj, index) => {
              return (
                <li
                  onClick={() => ChangeActive(obj, index)}
                  key={index}
                  className={sort.name === obj.name ? 'active' : ''}
                >
                  {console.log(sort.name)}
                  {obj.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
