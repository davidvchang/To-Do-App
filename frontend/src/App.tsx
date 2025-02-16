import Login from "./pages/Login"
import Register from "./pages/Register"
import TodoPage from "./pages/TodoPage"
import {Route, Routes, BrowserRouter} from 'react-router-dom'

function App() {

  return (
    <main className="w-full h-[100vh] bg-slate-50 p-10">
      {/* <TodoPage/> */}
  
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      
      </BrowserRouter>
    </main>
  )
}

export default App
