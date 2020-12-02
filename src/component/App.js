import React, { useState, useEffect } from "react";

//const Header = React.lazy(() => import('./Header'));
import { Header } from './header/Header';
import { SearchPane } from './maincomponent/SearchPane';
import { MovieList } from './maincomponent/MovieList';
import { Footer } from './footer/Footer';
import { ErrorBoundary } from './common/ErrorBoundary'
import { StyledApp, StyledMain } from "../style/StyledApp.js";

async function getData(url) {
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer" // no-referrer, *client
  });

  return await response.json();
}

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getData("http://localhost:4000/movies").then((jsonResponse) =>
      setMovies(jsonResponse.data)
    );
  }, []);

  return (
    <StyledApp>
      <Header />
      <ErrorBoundary>
        <StyledMain>
          <SearchPane setMovies={setMovies} />
          <MovieList movies={movies} />
        </StyledMain>
      </ErrorBoundary>
      <Footer />
    </StyledApp>
  );
}

export default App;
