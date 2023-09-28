import { useState } from 'react'
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route>
          <Link to='/'></Link>
        </Route>
      </Routes>
    </>
  )
}

export default App