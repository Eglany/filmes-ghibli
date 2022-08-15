const fetchGhibli = async (theme) => fetch(`https://ghibliapi.herokuapp.com/${theme}`).then((data) => data.json());

export default fetchGhibli;
