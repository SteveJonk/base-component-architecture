import './App.css'
import {Card} from "./Components/Card/Card.tsx";
import {useFetch} from "./hooks/useFetch.ts";

const API_URL = 'https://rickandmortyapi.com/api/character'

const App = () => {
    const {data } = useFetch(API_URL)
  return (
    <>
        {data?.results?.map((character) => <Card name={character.name} />)}
    </>
  )
}

export default App
