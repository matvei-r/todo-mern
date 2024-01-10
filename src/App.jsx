import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")

  const handleSubmit = async () => {

    try {
      const response = await fetch('http://localhost:5000/api/getAll')
      console.log(response); 
    }
    catch (error){
      console.log(error)
    }

  }

  return (
    <>
    <input type="text" onChange={(e) => setText(e.currentTarget.value)}></input>
    <button onClick={handleSubmit}>submit</button>
    <div>{text}</div>
    </>
  )
}

export default App
