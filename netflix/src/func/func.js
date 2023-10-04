export const handleClick = (direction, listRef) => {
  const filmWidth = 293; // Ширина одного фильма
  const marginBetweenFilms = 10; // Отступ между фильмами

  let distance = listRef.current.getBoundingClientRect().left - 50;
  const maxScrollLeft =
    listRef.current.scrollWidth -
    listRef.current.offsetWidth -
    parseInt(window.getComputedStyle(listRef.current).marginLeft) +
    parseInt(window.getComputedStyle(listRef.current).marginRight);

  let newTranslateX;
  const currentTranslateX =
    parseInt(listRef.current.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
  newTranslateX = currentTranslateX - filmWidth - marginBetweenFilms;

  if (direction === 'left' && newTranslateX < -303) {
    listRef.current.style.transform = `translateX(${
      currentTranslateX + filmWidth + marginBetweenFilms + 30
    }px)`;
  }

  if (direction === 'right' && listRef.current) {
    newTranslateX = currentTranslateX - filmWidth - marginBetweenFilms;
    listRef.current.style.transform = `translateX(${newTranslateX - 30}px)`;
  }

  if (direction === 'right' && distance <= -maxScrollLeft) {
    listRef.current.style.transform = `translateX(${0}px)`;
  }
  if (direction === 'left' && newTranslateX >= -303) {
    listRef.current.style.transform = `translateX(${-maxScrollLeft - marginBetweenFilms - 20}px)`;
  }
};
