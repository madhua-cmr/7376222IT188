
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
<BrowserRouter>
<Routes>
  
  <Route path="/users" element={<Users/>}></Route>
  <Route path="/posts" element={<Posts/>}></Route>
  <Route path="/feed" element={<Feed/>}></Route></Routes></BrowserRouter>
  
    
  

    </>
  )
}

export default App
