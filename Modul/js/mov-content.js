import { favoriteHeard, likeHeart } from './favourite.js';

export const pushMoviesCards = (data, moviesContent, inputSearch) => {
  data.forEach((el) => {
    const element = inputSearch.value.length > 0 ? el.show : el;
    const wrapperItem = document.createElement('div');
    const cardItem = document.createElement('div');
    const img = document.createElement('img');
    const heart = document.createElement('div');
    const descBlock = document.createElement('div');
    const BackButton = document.createElement('div');
    const textDesc = document.createElement('div');
    const name = document.createElement('div');

    moviesContent.append(wrapperItem);
    wrapperItem.append(cardItem);
    cardItem.append(img);
    cardItem.append(heart);
    cardItem.append(name);
    wrapperItem.append(descBlock);
    descBlock.append(BackButton);
    descBlock.append(textDesc);

    textDesc.setAttribute('class', 'text-block-films');
    BackButton.setAttribute('class', 'fas fa-undo-alt');
    wrapperItem.setAttribute('class', 'wrapper-item');
    descBlock.setAttribute('class', 'description');
    heart.setAttribute('class', 'heart far fa-heart');
    cardItem.setAttribute('class', 'card-item');
    name.setAttribute('class', 'name-films');
    img.setAttribute('id', element.id);
    textDesc.innerHTML = `<p> Name: ${element.name}</p> <p> Language: ${element.language}</p> <p> Genres: ${element.genres}</p> <p> Premiered: ${element.premiered}</p> <p>Summary: ${element.summary}</p>`;
    name.textContent = `${element.name}`;

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

    const animationImg = () => {
      const funcPov = () => {
        cardItem.classList.toggle('povorot-a');
        descBlock.classList.toggle('povorot-b');
      };

      BackButton.addEventListener('click', funcPov);
      cardItem.addEventListener('click', funcPov);
    };

    animationImg();
    likeHeart(heart, img);
    favoriteHeard(heart);
  });
};
