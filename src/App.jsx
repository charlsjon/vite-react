import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import alemsLogo from './assets/alems.png'
import nikeLogo from './assets/nike.png'
import nikeBlackLogo from './assets/Nike-Logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="" target="_blank">
          <div className="nike logo"></div>
        </a>
        <a href="" target="_blank">
          <img src={alemsLogo} className="logo react" alt="Alems logo" />
        </a>
      </div>
      <h1>Air Alems</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          order is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
