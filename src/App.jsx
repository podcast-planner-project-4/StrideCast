import './App.css'
import { Client } from 'podcast-api';

function App() {
  
  const apiKey = import.meta.env.VITE_API_KEY;
  const client = Client({ apiKey });
  client.justListen({
  }).then((response) => {
    // Get response json data here
    console.log(response.data);
  }).catch((error) => {
    console.log(error)
  });
  return (
    <>
      <h1>hello</h1>
    </>
  )
}

export default App
