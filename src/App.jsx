import "./App.css";

//https://www.omdbapi.com/?apikey=7c5962cc&s=Avengers
//API_KEY = 7c5962cc

function App() {
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
      <main>Aquí irán los resultados</main>
    </div>
  );
}

export default App;
