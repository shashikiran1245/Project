let apiKey = 'Zx99MnV3uocF40erPP76KJNy8XB1H6le';
document.addEventListener('DOMContentLoaded', init);
function init() {
  document.getElementById('btnSearch').addEventListener('click', (ev) => {
    ev.preventDefault();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=`;
    let str = document.getElementById('Search').value.trim();
    url = url.concat(str);
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        console.log(content.data[0].images.original.url);
        let fig = document.createElement('figure');
        let img = document.createElement('img');
        let fc = document.createElement('figcaption');
        img.src = content.data[0].images.original.url;
        img.alt = content.data[0].title;

        fig.appendChild(img);

        let gif = document.querySelector('.gif-img');
        gif.insertAdjacentElement('afterbegin', fig);
      })

      .catch((err) => {
        console.error(err);
      });
  });
}

// const api = 'https://api.giphy.com/v1/gifs/search?';
// const apiKey = '&api_key=Zx99MnV3uocF40erPP76KJNy8XB1H6le';
// const custom = '&q=hello';
// fetch(api + apiKey + custom)
//   .then((response) => response.json())
//   .then((data) => console.log(data.data[0].images.original.url));
