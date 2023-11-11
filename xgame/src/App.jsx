import {useState} from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom'
import Navbar from './component/Nav/navbar'
import Login from './component/accounts/Login'
import XGames from './component/XGames/XGames'
import {PuzzleBoard} from './component/XGames/OnePlayer/Puzzle/puzzle'

function App() {
  const [count, setCount]=useState(0)

  return (
    <div className='w-full'>
      <Router>
        {/* <Navbar /> */}
        {/* <Sidebar /> */}
        <Switch>
          <Route path='/Login' Component={Login} />
          <Route path='/Logout' Component={Login} />
          <Route path='/Game/PuzzleCard' element={<div>DRANG</div>} />

        </Switch>
        <PuzzleBoard />

      </Router>
    </div>
  )
}

export default App
