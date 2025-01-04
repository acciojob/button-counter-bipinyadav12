
import { useState,React } from 'react'
import './../styles/App.css';

const App = () => {
   const [count, setCount] = useState(0)
  return (
    <div>
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count  {count}
        </button>
        
      </div>
      <p >
      Button clicked {count} times
      </p>
    </div>
  )
}

export default App
