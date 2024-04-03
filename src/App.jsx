import { useEffect, useState, useRef } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

//https://www.omdbapi.com/?apikey=7c5962cc&s=Avengers
//API_KEY = 7c5962cc

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if(isFirstInput.current) {
      isFirstInput.current = search === ''
      return
      
    }
    if(search === ''){
      setError("No se puede buscar una película vacía")
      return
    }
    if (search.match(/^\d+$/)){
      setError("No se puede buscar una película con número")
      return
    }
    if (search.length < 3){
      setError("La película debe tener al menos 3 caracteres")
      return
    }
    setError(null)
  }, [search])

  return {search, updateSearch, error}
}

function App() {
  const [sort, setSort] = useState(false)
  const {search, updateSearch, error} = useSearch()
  const {movies, loading,  getMovies} = useMovies({search, sort})

  const handleSubmit = (event) =>{
    event.preventDefault()
    getMovies(search)
  }

  const handleSort = () =>{
    setSort(!sort)
  }

  const handleChange = (event) =>{
    updateSearch(event.target.value)
  }


  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="query"
            style={{border: '1px solid transparent', borderColor: error ? 'red' : 'transparent'}}
            value={search}
            onChange={handleChange}
            id=""
            placeholder="Avengers, Star Wars, The matrix ..."
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  );
}

export default App;
