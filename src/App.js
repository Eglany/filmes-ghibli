import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [films, setFilms] = useState([{}])
  
  const fetchGhibli = async () => {
    const api = await fetch("https://ghibliapi.herokuapp.com/films");
    const data = await api.json();
    setFilms(data)
  }

  useEffect(() => {
    fetchGhibli()
  },[]);


  return (
    <div className="App">
      {films.map(({title,image, description}) => (
        <div id='card'>
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
