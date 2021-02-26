const moviesContent = document.getElementById('movies-content');
const inputSearch = document.getElementById('inp-search');
const searchButton = document.getElementById('search');
const pushFav = document.getElementById('push-favorite');
const filterSelect = document.getElementById('filter-select');
const buttonFilter = document.getElementById('button-filter');


const getUsers = () => {
  moviesContent.innerHTML = '';
  const promise = fetch(
    `http://api.tvmaze.com/search/shows?q=${
      inputSearch.value ? inputSearch.value : 'wars'
    }`
  );
  promise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((element) => {
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
        img.setAttribute('id', element.show.id);

        textDesc.innerHTML = `<p> Name: ${element.show.name}</p> <p> Language: ${element.show.language}</p> <p> Genres: ${element.show.genres}</p> <p> Premiered: ${element.show.premiered}</p> Summary: ${element.show.summary}`;

        
        if(element.show.image === null) {
          cardItem.className = 'card-item not-image'
          cardItem.append(element.show.name)
          img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMLUVfmmLi97qvORyuwoPdEzeHeLj2hIm0yg&usqp=CAU')
        } else {
          img.setAttribute('src', element.show.image.medium);
          
        }
        
        const funcPovRemove = () => {
          cardItem.className = 'card-item remove-povorot-a';
          descBlock.className = 'description remove-povorot-b';
        };
        const funcPov = () => {
          cardItem.setAttribute('class', 'card-item povorot-a');
          descBlock.setAttribute('class', 'description povorot-b');
        };
        // favorite
        const favoriteLike = () => {
          heart.className = 'heart fas fa-heart click-heard';
          const imgFav = img;
          const srcImg = imgFav.getAttribute('src');
          localStorage.setItem('id', srcImg);

          if (heart.className === 'heart fas fa-heart click-heard') {
            localStorage.setItem('classHeard', heart.className);
            let getHeard = localStorage.getItem('classHeard');
            heart.className = getHeard;
          }
        };

        heart.addEventListener('click', favoriteLike, {
          once: true,
        });
        wrapperItem.addEventListener('click', funcPov, {
          once: true,
        });
        BackButton.addEventListener('click', funcPovRemove, {
          once: true,
        });
      });
    });
};

const favPush = () => {

  const imgFavorite = document.createElement('img');
  const arrImgfav = document.createElement('div');
  let c = localStorage.getItem('id');
  imgFavorite.setAttribute('src', c);
  arrImgfav.appendChild(imgFavorite);
  pushFav.appendChild(arrImgfav)
};

if (document.location.pathname.includes('favourite.html')) {
  favPush();
}

const funcActive = () => {
  filterSelect.className = '.menu-filter menu-filter-active'
}

buttonFilter.addEventListener('click', funcActive)

if (document.location.pathname.includes('films.html')) {
  getUsers();
}

searchButton.addEventListener('click', getUsers);
