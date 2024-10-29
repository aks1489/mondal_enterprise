import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './App.css'
import Hero from './components/Hero.js'
import NavBar from './components/NavBar'
import Services from './components/Services.js'

function App() {

  return (
    <div className='container-fluid m-0 p-0'>
      <NavBar />
      <Hero />
      <div className="container">
        <hr className="border border-success border-1 opacity-50" />
      </div>
      <Services />
    </div>
  )
}

export default App
