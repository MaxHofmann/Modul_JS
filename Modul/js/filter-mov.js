export const filterGenres = (data, inputSearch) => {
  return data.filter((item) => {
    let itemsG = inputSearch.value.length > 0 ? item.show : item;
    return genres.innerHTML === 'Genres'
      ? item
      : itemsG.genres.includes(genres.innerHTML);
  });
};

export const filterLanguage = (data, inputSearch) => {
  return data.filter((item) => {
    let itemsL = inputSearch.value.length > 0 ? item.show : item;
    return language.innerHTML === 'Language'
      ? item
      : itemsL.language.includes(language.innerHTML);
  });
};
