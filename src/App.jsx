import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Done from './components/Done'
import Bin from './components/Bin'

function App() {

  return (
    <div className="container">
      <nav className="nav">
        <Link to='home'><button className='nav-btn'><div>To-do List</div></button></Link>
        <Link to='done'><button className='nav-btn'><div>Tamamlanmislar</div></button></Link>
        <Link to='bin'><button className='nav-btn'><div>Silinmisler</div></button></Link>
      </nav>
      <div className="main">
        <Routes>
          <Route path='' element={<Navigate to='home' />} />
          <Route path='home' element={<Home />} />
          <Route path='done' element={<Done />} />
          <Route path='bin' element={<Bin />} />
        </Routes>
      </div>
    </div>
  )
}

export default App