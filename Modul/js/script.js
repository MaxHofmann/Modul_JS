const moviesContent = document.getElementById('movies-content');
const inputSearch = document.getElementById('inp-search');
const searchButton = document.getElementById('search');
const distanceBlock = document.getElementById('dist-block');
const pageLine = document.getElementById('page-line');

export { getUsers, moviesContent };
import { slidePage, start } from './slider-page.js';
import { filterGenres, filterLanguage } from './filter-mov.js';
import { pushMoviesCards } from './mov-content.js';
import { select } from './select.js';

const getUsers = () => {
  moviesContent.innerHTML = '';
  const urlFirst = `http://api.tvmaze.com/search/shows?q=${inputSearch.value}`;
  const urlSecond = `http://api.tvmaze.com/shows?page=33`;
  const promise = fetch(inputSearch.value.length > 0 ? urlFirst : urlSecond);

  promise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return filterGenres(data, inputSearch);
    })
    .then((data) => {
      return filterLanguage(data, inputSearch);
    })
    .then((data) => {
      return slidePage(data, distanceBlock, pageLine);
    })
    .then((data) => {
      return pushMoviesCards(data, moviesContent, inputSearch);
    });
};

searchButton.addEventListener('click', start);

if (document.location.pathname.includes('films.html')) {
  getUsers();
}

searchButton.addEventListener('click', getUsers);
inputSearch.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    searchButton.click();
  }
});

select(getUsers);
