import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './layouts/layout'
import IndexPage from './pages/IndexPage'

export default function AppRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<IndexPage/>} index ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}