import Header from './Components/Header/header';
import MoviesList from './Components/MoviesList';
import AddMovie from './Components/AddMovie/AddMovie';
import { useState } from 'react';
import { moviesData } from './MoviesData';
// import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  const [movies, setMovies] = useState(moviesData)
  const [search, setSearch] = useState("")
  const [searchRate, setSearchRate] = useState(0)
  
  const addMovie = (x) => {
    setMovies([...movies, x])
  }
  return (
    
    <div className= 'App'>
          

    <Header setSearch={setSearch} setSearchRate={setSearchRate} searchRate={searchRate} />
    <MoviesList movies={movies.filter(el => el.name.toLowerCase().includes(search.toLowerCase().trim()) &&
                                            el.rating >= searchRate)} />
    < AddMovie addNewMovie={addMovie} /> 
   </div>
);
}

export default App;
