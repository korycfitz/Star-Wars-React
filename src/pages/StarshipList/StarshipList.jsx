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

  if (!starshipList.name) return <h1>Loading...</h1>

  return (
    <main className="starship-list">
      <h1>Starship List</h1>
      {starshipList.map((starship, idx) => (
        <div 
        key={idx} 
        >
          <Link 
          // to={`/starships/${starship._id}`}>{starship.name}
          to={`/starships/${starship.url.match(/\d+/g)}`}
          >
            {starship.name}
          </Link>
        </div>
      ))}
    </main> 
  )
}

export default StarshipList;