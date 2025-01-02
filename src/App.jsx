import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import MoviesAndShows from './Pages/MoviesAndShows/MoviesAndShows';
import Subscription from './Pages/Subscription/Subscription';
import Support from './Pages/Support/Support';
import Navbar from './Components/Navbar/Navbar';
import Title from './Components/Title/Title';

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/MoviesAndShows' element={<MoviesAndShows />} />
        <Route path='/Subscription' element={<Subscription />} />
        <Route path='/Support' element={<Support />} />
      </Routes>
    </>
  )
}
