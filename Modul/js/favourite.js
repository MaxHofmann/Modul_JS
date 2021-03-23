const pushFav = document.getElementById('push-favorite');

export const favoriteHeard = (heart) => {
  const favoriteLike = (event) => {
    const heartEvent = event.target;
    heartEvent.classList.toggle('fas');
    event.stopPropagation();
    let neighbour = heartEvent.previousElementSibling;
    localStorage.setItem(`${neighbour.id}`, neighbour.src);

    if (heartEvent.classList.value === 'heart far fa-heart') {
      localStorage.removeItem(`${neighbour.id}`, neighbour.src);
    }
  };
  heart.addEventListener('click', favoriteLike);
};

export const favPush = (pushFav) => {
  for (let i = 0; i < localStorage.length; i++) {
    const imgFavorite = document.createElement('img');
    const arrImgfav = document.createElement('div');
    arrImgfav.setAttribute('class', 'fav-image');
    let key = localStorage.key(i);
    let selectImg = localStorage.getItem(key);
    imgFavorite.setAttribute('src', selectImg);
    arrImgfav.append(imgFavorite);
    pushFav.append(arrImgfav);
  }
};

if (document.location.pathname.includes('favourite.html')) {
  favPush(pushFav);
}

export const likeHeart = (heart, img) => {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let s = localStorage.getItem(key);
    if (img.src === s) {
      heart.className = 'heart far fa-heart fas';
    }
  }
};
