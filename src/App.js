import './style/App.css';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'


import Home from './components/HomePage.jsx'
import Diary from './components/Diary.jsx'
import NavBar from './components/navbar.jsx';
import Van from './components/Van.jsx'
import Background from './components/Background.jsx';
import Travels from './components/Travels.jsx'
import Adventure from './components/Adventure'
import Contacts from './components/Contacts.jsx'
import Questions from './components/Questions.jsx'
import Map from './components/Map.jsx'

import travelData from './data/travels.js'

function App() {


  function createTravelRoutes () {
    const routes = []
    for( let travel in travelData ){
      routes.push(<Route key={travel} path={travelData[travel].path} element={<Adventure id={travel}/>}></Route>)
    }
    return routes;
  }


  // Set the path of the current diary
  const location = useLocation()

  return (

      <div className="App">
        <Background/>

        { location.pathname === "/home" ? 
            <div id="homeNav">
              <NavBar id="navbar-home"/>
              <h1>Alessandro's Van Life</h1>
            </div>
            :
            <div id="Nav"> 
              <NavBar id="navbar"/>
              <h1>Alessandro's Van Life</h1>
            </div>
        }

        <Routes>
          <Route path="/" element={<Navigate to="home"/>}/>
          <Route path="/diary" element={<Diary/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/van" element={<Van/>}/>
          <Route path='/adventures' element={<Travels/>}/>
          <Route path='/questions' element={<Questions/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/map' element={<Map/>}/>


          {/* Adventure routes */}
          {
            createTravelRoutes()
          }
        </Routes>
      </div>

  );
}

export default App;
