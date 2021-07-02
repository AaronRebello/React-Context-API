import logo from './logo.svg';
import './App.css';
import Counter from './Pages/Counter';
import Button from './Pages/Button';
import MovieProvider from './Pages/MovieContext/MovieContext';
import MovieList from './Pages/MovieList';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        {/* <Counter /> */}
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
