import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      {/* outlet for App's children in router */}
      <Outlet />
    </>
  )
}

export default App
