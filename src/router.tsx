import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/home'
import About from './pages/about'
import Contacto from './pages/contact'

export default function AppRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>} index ></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contacto/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}