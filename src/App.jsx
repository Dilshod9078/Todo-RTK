
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddTodo from './Pages/AddTodo'
import Todos from './Pages/Todos'
import Update from './Pages/Update'
import Delete from './Pages/Delete'
import More from './Pages/More'

function App() {
 
  return (
    <>
   <Routes>
     <Route path='/' element={<Todos/>}/>
     <Route path='/add' element={<AddTodo/>}/>
     <Route path='/update/:id' element={<Update/>}/>
     <Route path='/delete/:id' element={<Delete/>}/>
     <Route path='/more/:id' element={<More/>}/>
   </Routes>
    </>
  )
}

export default App
