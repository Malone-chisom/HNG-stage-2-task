
import Header from '../src/components/header/Header';
import MissionStatement from "./components/missionStatement/MissionStatement"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Pages from "./pages/Pages"

function App() {


  return (
    <>
      <div className='app'>
        <Navbar />
        <Pages />
      </div>

    </>
  )
}

export default App
