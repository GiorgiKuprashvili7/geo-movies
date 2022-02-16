import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import PageNotFound from './components/PageNotFound/PageNotFound'
import MovieDetail from './components/MovieDatail/MovieDatail'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:imdbID" element={<MovieDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
