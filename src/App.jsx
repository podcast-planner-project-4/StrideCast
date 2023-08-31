import './App.css'
import { Client } from 'podcast-api'

function App() {

  const apiKey = import.meta.env.VITE_API_KEY 
  const client = Client({ apiKey });

  client.fetchPodcastGenres({
    
 
  }).then((response) => {
    
    console.log(response.data);
  }).catch((error) => {
    console.log(error)
  });

  return (
    <>
      
    </>
  )
}



export default App
