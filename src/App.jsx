import "./App.css";
import { useRef } from "react";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

//https://www.omdbapi.com/?apikey=7c5962cc&s=Avengers
//API_KEY = 7c5962cc


function App() {
  const {movies} = useMovies()
  const inputRef = useRef() 

  const handleClick = () =>{
    const inputEl = inputRef.current
    const value = inputEl.value

  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form action="" className="form">
          <input
            ref={inputRef}
            type="text"
            name=""
            id=""
            placeholder="Avengers, Star Wars, The matrix ..."
          />
          <button type="submit" onClick={handleClick}>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
