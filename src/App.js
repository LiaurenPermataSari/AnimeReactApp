import './App.css';
import { useEffect, useState } from 'react'
import Items from './Items';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ItemDetail from './ItemDetail'

function App() {

  const [anime, setAnime] = useState([]);

  useEffect (() => {
    const getItems = async () => {
      const itemFromServer = await fetchItems();
      setAnime(itemFromServer)
    }

    getItems();
  }, []);

  const fetchItems = async () => {
    const res = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
    const data = await res.json();

    return data.top;
  }

  return (
    <Router>
      <div className="App">
      <h1>
        <Link className='link' to={`/`}>Anime List App</Link>
      </h1>
      <Routes>
        <Route path="/" exact element={
            <>
              <Items anime={anime} />
            </>
          }
        />
        <Route path="/item/:id" element={<ItemDetail/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
