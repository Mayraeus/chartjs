import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Chartjs from './pages/Chartjs.jsx'
//import './assets/css/idex.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Chartjs />} />
      <Route path='/chartjs/:id' element={<Chartjs />} />
    </Routes>
  </BrowserRouter>
)
