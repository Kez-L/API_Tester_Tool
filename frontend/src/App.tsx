import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [message, setMessage] = useState<string>("loading...")

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/")
      .then((res) => {
        setMessage(res.data.message)
      })
      .catch(() => {
        setMessage("Error contacting backend")
      })
  }, [])

  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default App