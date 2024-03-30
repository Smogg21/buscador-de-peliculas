import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

//https://www.omdbapi.com/?apikey=7c5962cc&s=Avengers
//API_KEY = 7c5962cc


function App() {
  const {movies: mappedMovies} = useMovies()

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form action="" className="form">
          <input
            type="text"
            name=""
            id=""
            placeholder="Avengers, Star Wars, The matrix ..."
          />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
