import Counter from './components/counter/Counter'
import DNChange from './components/DayNightChange/DNChange'
import Input from './components/Input/Input'
import MovieDatabase from './components/MovieDatabase/MovieDatabase'
import ToDoListe from './components/ToDo/ToDoListe'
import './App.css'
import movies from './assets/Lev1_1-React_JS-Movie Database'

function App() {

  return (
    <>
      <Counter />
      <DNChange />
      <Input />
      <ToDoListe />

      <section className='gridMe'>
        {movies.map((movie, index) => 
        <MovieDatabase title={movie.titel} year={movie.year} 
        duration={movie.duration} director={movie.director} 
        genre={movie.genre} rate={movie.rate} key={index} />)}
      </section>
    </>
  )
}

export default App
