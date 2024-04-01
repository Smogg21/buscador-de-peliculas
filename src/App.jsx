import { useEffect, useState, useRef } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

//https://www.omdbapi.com/?apikey=7c5962cc&s=Avengers
//API_KEY = 7c5962cc


function App() {
  const {movies} = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log({query})
  }

  const handleChange = (event) =>{
    const newQuery = event.target.value
    if(newQuery.startsWith(' ')) return
    setQuery(event.target.value)
  }


  useEffect(() => {
    if(query === ''){
      setError("No se puede buscar una película vacía")
      return
    }
    if (query.match(/^\d+$/)){
      setError("No se puede buscar una película con número")
      return
    }
    if (query.length < 3){
      setError("La película debe tener al menos 3 caracteres")
      return
    }
    setError(null)
  }, [query])

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="query"
            style={{border: '1px solid transparent', borderColor: error ? 'red' : 'transparent'}}
            value={query}
            onChange={handleChange}
            id=""
            placeholder="Avengers, Star Wars, The matrix ..."
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
