export const getAllPokemon = (url: string) => {
  return new Promise(resolve => {
    fetch(url)
      .then(res => res.json())
      .then(data => resolve(data));
  });
};