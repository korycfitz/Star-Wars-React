import { useState, useEffect } from "react"
import { getStarshipList } from "../../services/sw-api"
import { Link } from 'react-router-dom'

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])
  
  useEffect(()=> {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList()
      setStarshipList(starshipData)
    }
    fetchStarshipList()
  }, [])

  if (!starshipList.length) return <h1>Loading All Starships...</h1>

  return (
    <main className="starship-list">
      <h1>Starship List</h1>
      {starshipList.map((starship, idx) => (
        <Link 
        to={`/starships/${starship.url.match(/\d+/g)}`} 
        key={idx}
        >{starship.name}
        </Link>
      ))}
    </main> 
  )
}

export default StarshipList