// const moviesContent = document.getElementById('movies-content');
// const inputSearch = document.getElementById('inp-search');
// const searchButton = document.getElementById('search');
// const pushFav = document.getElementById('push-favorite');
// const filterBlock = document.getElementById('filter-block');
// const buttonFilter = document.getElementById('button-filter');

// const getUsers = () => {
//   moviesContent.innerHTML = '';
//   const urlFirst = `http://api.tvmaze.com/search/shows?q=${inputSearch.value}`;
//   const urlSecond = `http://api.tvmaze.com/shows?page=33`;
//   const promise = fetch(inputSearch.value.length > 0 ? urlFirst : urlSecond);
//   promise
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//           return data.filter((item) => {
//             const items = inputSearch.value.length > 0 ? item.show : item;
//             return genres.innerHTML == 'Genres' ? item : items.genres.includes(genres.innerHTML);
//           });
//     })
//     .then((data) => {
//       return data.filter((item) => {
//         const itemss = inputSearch.value.length > 0 ? item.show : item;
//         return language.innerHTML == 'Language' ? item : itemss.language.includes(language.innerHTML);
//       });
// })
//     .then((data) => {
//       data.forEach((el) => {
//         const element = inputSearch.value.length > 0 ? el.show : el;
//         const wrapperItem = document.createElement('div');
//         const cardItem = document.createElement('div');
//         const img = document.createElement('img');
//         const heart = document.createElement('div');
//         const descBlock = document.createElement('div');
//         const BackButton = document.createElement('div');
//         const textDesc = document.createElement('div');

//         moviesContent.append(wrapperItem);
//         wrapperItem.append(cardItem);
//         cardItem.appendChild(img);
//         cardItem.appendChild(heart);
//         wrapperItem.appendChild(descBlock);
//         descBlock.appendChild(BackButton);
//         descBlock.appendChild(textDesc);

//         textDesc.setAttribute('class', 'text-block-films');
//         BackButton.setAttribute('class', 'fas fa-undo-alt');
//         wrapperItem.setAttribute('class', 'wrapper-item');
//         descBlock.setAttribute('class', 'description');
//         heart.setAttribute('class', 'heart far fa-heart');
//         cardItem.setAttribute('class', 'card-item');
//         img.setAttribute('id', element.id);

//         textDesc.innerHTML = `<p> Name: ${element.name}</p> <p> Language: ${element.language}</p> <p> Genres: ${element.genres}</p> <p> Premiered: ${element.premiered}</p> Summary: ${element.summary}`;

//         if (!element.image) {
//           cardItem.className = 'card-item not-image';
//           cardItem.append(element.name);
//           img.setAttribute(
//             'src',
//             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMLUVfmmLi97qvORyuwoPdEzeHeLj2hIm0yg&usqp=CAU'
//           );
//         } else {
//           img.setAttribute('src', element.image.medium);
//         }

//         let animationImg = function () {
//           const funcPov = () => {
//             cardItem.classList.toggle('povorot-a');
//             descBlock.classList.toggle('povorot-b');
//           };

//           BackButton.addEventListener('click', funcPov);
//           cardItem.addEventListener('click', funcPov);
//         };

//         animationImg();

//         // favorite
//         let favoriteHeard = function () {
//           const favoriteLike = (event) => {
//             const heartEvent = event.target;
//             heartEvent.classList.toggle('fas');
//             event.stopPropagation();
//             const imgFav = img;
//             let keyImg = img.id;
//             const srcImg = imgFav.getAttribute('src');
//             localStorage.setItem(`${keyImg}`, srcImg);
//             // if(heartEvent.classList == 'heart far fa-heart fas') {
//             //   localStorage.setItem('keyClass', keyImg.heartEvent.classList)
//             //   let n = localStorage.getItem('keyClass')
//             //   heartEvent.className = `${n}`;
//             //   console.log(n)
//             // }
//           };
//           heart.addEventListener('click', favoriteLike);
//         };
//         favoriteHeard();
//       });

//     });
// };

// const favPush = () => {
//   for (let i = 0; i < localStorage.length; i++) {
//     const imgFavorite = document.createElement('img');
//     const arrImgfav = document.createElement('div');
//     let key = localStorage.key(i);
//     let c = localStorage.getItem(key);
//     imgFavorite.setAttribute('src', c);
//     arrImgfav.appendChild(imgFavorite);
//     pushFav.appendChild(arrImgfav);
//   }
// };
// if (document.location.pathname.includes('favourite.html')) {
//   favPush();
// }

// let filterSearch = function () {
//   const funcActive = () => {
//     filterBlock.classList.toggle('menu-filter-active');
//     buttonFilter.classList.toggle('button-back');
//   };

//   buttonFilter.addEventListener('click', funcActive);
// };
// filterSearch();

// if (document.location.pathname.includes('films.html')) {
//   getUsers();
// }

// searchButton.addEventListener('click', getUsers);
// inputSearch.addEventListener('keyup', function (event) {
//   if (event.keyCode === 13) {
//     searchButton.click();
//   }
// });

// function select () {
//   const selectHeader = document.querySelectorAll('.select-header');
//   const selectItem = document.querySelectorAll('.select-item');

//   selectHeader.forEach((item) => {
//     item.addEventListener('click', selectToggle);
//   });

//   selectItem.forEach((item) => {
//     item.addEventListener('click', selectChoose);
//   });

//   function selectToggle() {
//     this.parentElement.classList.toggle('is-active');
//   }

//   function selectChoose() {
//     let text = this.innerText,
//       select = this.closest('.select'),
//       currentText = select.querySelector('.select-current');
//     currentText.innerText = text;
//     select.classList.remove('is-active');
//     const genres = document.getElementById('genres');
//     const language = document.getElementById('language');
//   }
// };
// select();

const moviesContent = document.getElementById('movies-content');
const inputSearch = document.getElementById('inp-search');
const searchButton = document.getElementById('search');
const pushFav = document.getElementById('push-favorite');
const filterBlock = document.getElementById('filter-block');
const buttonFilter = document.getElementById('button-filter');
const arrowPriv = document.getElementById('arrow-priv');
const arrowNext = document.getElementById('arrow-next');
const startNumbPage = document.getElementById('start-page');
const finisClassPage = document.getElementsByClassName('numbers-page');
const finisNumbPage = document.getElementById('finish-page');
const wrapperItemClass = document.getElementsByClassName('wrapper-item');
const distanceBlock = document.getElementById('dist-block');
const pageLine = document.getElementById('page-line');

function getUsers() {
  moviesContent.innerHTML = '';
  const urlFirst = `http://api.tvmaze.com/search/shows?q=${inputSearch.value}`;
  const urlSecond = `http://api.tvmaze.com/shows?page=33`;
  const promise = fetch(inputSearch.value.length > 0 ? urlFirst : urlSecond);
  promise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.filter((item) => {
        itemsG = inputSearch.value.length > 0 ? item.show : item;
        return genres.innerHTML == 'Genres'
          ? item
          : itemsG.genres.includes(genres.innerHTML);
      });
    })
    .then((data) => {
      return data.filter((item) => {
        itemsL = inputSearch.value.length > 0 ? item.show : item;
        return language.innerHTML == 'Language'
          ? item
          : itemsL.language.includes(language.innerHTML);
      });
    })
    .then((data) => {
      distanceBlock.style.marginLeft = `${+startNumbPage.innerHTML * 2}` + 'px';
      pageLine.style.width = `${data.length * 2 + 4}` + 'px';
      return data.slice(+startNumbPage.innerHTML, +finisNumbPage.innerHTML);
    })
    .then((data) => {
      data.forEach((el) => {
        const element = inputSearch.value.length > 0 ? el.show : el;
        const wrapperItem = document.createElement('div');
        const cardItem = document.createElement('div');
        const img = document.createElement('img');
        const heart = document.createElement('div');
        const descBlock = document.createElement('div');
        const BackButton = document.createElement('div');
        const textDesc = document.createElement('div');

        moviesContent.append(wrapperItem);
        wrapperItem.append(cardItem);
        cardItem.appendChild(img);
        cardItem.appendChild(heart);
        wrapperItem.appendChild(descBlock);
        descBlock.appendChild(BackButton);
        descBlock.appendChild(textDesc);

        textDesc.setAttribute('class', 'text-block-films');
        BackButton.setAttribute('class', 'fas fa-undo-alt');
        wrapperItem.setAttribute('class', 'wrapper-item');
        descBlock.setAttribute('class', 'description');
        heart.setAttribute('class', 'heart far fa-heart');
        cardItem.setAttribute('class', 'card-item');
        img.setAttribute('id', element.id);

        textDesc.innerHTML = `<p> Name: ${element.name}</p> <p> Language: ${element.language}</p> <p> Genres: ${element.genres}</p> <p> Premiered: ${element.premiered}</p> <p>Summary: ${element.summary}</p>`;

        if (!element.image) {
          cardItem.className = 'card-item not-image';
          cardItem.append(element.name);
          img.setAttribute(
            'src',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMLUVfmmLi97qvORyuwoPdEzeHeLj2hIm0yg&usqp=CAU'
          );
        } else {
          img.setAttribute('src', element.image.medium);
        }

        function animationImg() {
          const funcPov = () => {
            cardItem.classList.toggle('povorot-a');
            descBlock.classList.toggle('povorot-b');
          };

          BackButton.addEventListener('click', funcPov);
          cardItem.addEventListener('click', funcPov);
        }

        animationImg();

        // favorite
        function favoriteHeard() {
          const favoriteLike = (event) => {
            const heartEvent = event.target;
            heartEvent.classList.toggle('fas');
            event.stopPropagation();
            const imgFav = img;
            let keyImg = img.id;
            const srcImg = imgFav.getAttribute('src');
            localStorage.setItem(`${keyImg}`, srcImg);
            // if(heartEvent.classList == 'heart far fa-heart fas') {
            //   localStorage.setItem('keyClass', keyImg.heartEvent.classList)
            //   let n = localStorage.getItem('keyClass')
            //   heartEvent.className = `${n}`;
            //   console.log(n)
            // }
          };
          heart.addEventListener('click', favoriteLike);
        }
        favoriteHeard();
      });
    });
}

function favPush() {
  for (let i = 0; i < localStorage.length; i++) {
    const imgFavorite = document.createElement('img');
    const arrImgfav = document.createElement('div');
    let key = localStorage.key(i);
    let c = localStorage.getItem(key);
    imgFavorite.setAttribute('src', c);
    arrImgfav.appendChild(imgFavorite);
    pushFav.appendChild(arrImgfav);
  }
}
if (document.location.pathname.includes('favourite.html')) {
  favPush();
}

function filterSearch() {
  const funcActive = () => {
    filterBlock.classList.toggle('menu-filter-active');
    buttonFilter.classList.toggle('button-back');
  };

  buttonFilter.addEventListener('click', funcActive);
}
filterSearch();

if (document.location.pathname.includes('films.html')) {
  getUsers();
}

searchButton.addEventListener('click', getUsers);
inputSearch.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    searchButton.click();
  }
});

function select() {
  const selectHeader = document.querySelectorAll('.select-header');
  const selectItem = document.querySelectorAll('.select-item');

  selectHeader.forEach((item) => {
    item.addEventListener('click', selectToggle);
  });

  selectItem.forEach((item) => {
    item.addEventListener('click', selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    let text = this.innerText,
      select = this.closest('.select'),
      currentText = select.querySelector('.select-current');
    currentText.innerText = text;
    select.classList.remove('is-active');
    const genres = document.getElementById('genres');
    const language = document.getElementById('language');
    return (
      (startNumbPage.innerHTML = 0),
      (finisNumbPage.innerHTML = `${stopItem}`),
      getUsers()
    );
  }
}
select();

let stopItem = 9;

for (let item of finisClassPage) {
  item.addEventListener('click', quantityItems);
}

function quantityItems(event) {
  stopItem = +event.target.innerHTML;
  finisNumbPage.innerHTML = `${stopItem}`;
  return (
    (startNumbPage.innerHTML = 0),
    (finisNumbPage.innerHTML = `${stopItem}`),
    getUsers()
  );
}

arrowPriv.addEventListener('click', pagePriv);

function pagePriv() {
  arrowPriv.classList.add('fas');
  if ((arrowNext.classList = 'fas')) {
    arrowNext.className = 'far fa-arrow-alt-circle-right arrow-page';
  }

  startNumbPage.innerHTML = +startNumbPage.innerHTML - stopItem;
  finisNumbPage.innerHTML = +finisNumbPage.innerHTML - stopItem;
  if (startNumbPage.innerHTML < 0) {
    return (startNumbPage.innerHTML = 0), (finisNumbPage.innerHTML = 9);
  }
  getUsers();
  let count = -450;

  function animateLeft() {
    moviesContent.style.marginLeft = count + '%';
    count = count + 10;
  
    if (count <= 0) {
      requestAnimationFrame(animateLeft);
    }
  };
  requestAnimationFrame(animateLeft);
  
}

arrowNext.addEventListener('click', pageNext);

function pageNext() {
  arrowNext.classList.add('fas');
  if ((arrowPriv.classList = 'fas')) {
    arrowPriv.className = 'far fa-arrow-alt-circle-left arrow-page';
  }

  startNumbPage.innerHTML = +startNumbPage.innerHTML + stopItem;
  finisNumbPage.innerHTML = +finisNumbPage.innerHTML + stopItem;
  if (wrapperItemClass.length <= 1) {
    (function () {
      return (startNumbPage.innerHTML = 0), (finisNumbPage.innerHTML = 9);
    })();
  }
  getUsers();
  
  let count = -450;

function animateRight() {
  moviesContent.style.marginRight = count + '%';
  count = count + 10;

  if (count <= 0) {
    requestAnimationFrame(animateRight);
  }
};
requestAnimationFrame(animateRight);
}





// pageLine.onmousedown = function (event) {
//   event.preventDefault();

//   let shiftX = event.clientX - distanceBlock.getBoundingClientRect().left;

//   document.addEventListener('wheel', onMouseMove);
//   document.addEventListener('mouseover', onMouseUp);

//   function onMouseMove(event) {
//     let newLeft =
//       event.clientX - shiftX - pageLine.getBoundingClientRect().left;

//     if (newLeft < 0) {
//       newLeft = 0;
//     }
//     let rightEdge = pageLine.offsetWidth - distanceBlock.offsetWidth;
//     if (newLeft > rightEdge) {
//       newLeft = rightEdge;

//     }

//     distanceBlock.style.left = newLeft + 'px';
//     finisNumbPage.innerHTML = newLeft;
//     startNumbPage.innerHTML = newLeft;
//     getUsers();
//     animationList();
//   }

//   function onMouseUp() {
//     document.removeEventListener('mouseover', onMouseUp);
//     document.removeEventListener('wheel', onMouseMove);
//   }
// };

// distanceBlock.ondragstart = function () {
//   return false;
// };
