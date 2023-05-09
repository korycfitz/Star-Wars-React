import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import StarshipList from './pages/StarshipList/StarshipList'
import StarshipDetails from './pages/StarshipDetails/StarshipDetails'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/starships' element={<StarshipList />}/>
        <Route path='/starships/:starshipId' element={<StarshipDetails />}/>
      </Routes>
    </>
  )
}

export default App
