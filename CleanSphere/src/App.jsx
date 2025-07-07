// import './App.css'

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import LayOut from "./pages/LayOut"

function App() {
  return (
      <Routes>
        <Route path='/' element={<LayOut/>}>
            <Route index element={<Home/>} />
        </Route>
    </Routes>
  )
}
export default App
