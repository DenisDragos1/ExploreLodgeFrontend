import {BrowserRouter, Routes, Route} from 'react-router-dom'

import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      
    <Route path='/' element={<HomePage />}></Route>
    <Route path='/register' element={<RegisterPage />}></Route>

    <Route path='/users' element={<UsersPage />}></Route>

     </Routes>
    </BrowserRouter>
  )
}

export default App
