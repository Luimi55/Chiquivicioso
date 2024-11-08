import './App.css'
import Navbar from './components/Navbar'
import Home from './screens/Home'
import Biography from './screens/Biography'
import Article from './screens/Article'
import Art from './screens/Art';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/Chiquivicioso' Component={Home}/>
          <Route path='/biography' Component={Biography}/>
          <Route path='/art' Component={Art}/>
          <Route path='/article' Component={Article}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
