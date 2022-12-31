import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className=''>
      <div className="h-screen snap-start">
        <h1 className="font-bold text-center text-xl mt-6">
          Your Weekly Report
        </h1>
        <div className="font-bold text-center">
          Dec 31, 2022
        </div>
      </div>

   
    </div>
  )
}

export default App

