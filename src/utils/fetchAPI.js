const fetchGhibli = async (path) => fetch(`https://ghibliapi.herokuapp.com/${path}`).then((data) => data.json());

export default fetchGhibli;
