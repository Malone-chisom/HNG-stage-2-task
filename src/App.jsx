
// import Header from '../src/components/header/Header';
import Footer from './components/footer/Footer';
// import MissionStatement from "./components/missionStatement/MissionStatement"
import Navbar from "./components/navbar/Navbar"
// import Home from "./pages/home/Home"
import Pages from "./pages/Pages"

function App() {


  return (
    <>
      <div className='app'>
        <Navbar />
        <Pages />
      </div>
      <Footer />

    </>
  )
}

export default App
