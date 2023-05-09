import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getStarship } from "../../services/sw-api"
import { Link } from "react-router-dom"

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const { starshipId } = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getStarship(starshipId)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [starshipId])

  if (!starshipDetails.name) return <h1>Loading...</h1>

  return (
    <main className="starship-details">
      <h1>Starship Details</h1>
      <h2>Name: {starshipDetails.name}</h2>
      <h2>Model: {starshipDetails.model}</h2>
      <Link 
      to="/starships" 
      >
        <button>
          Return to Starship List
        </button>
      </Link>
    </main>
  )
}

export default StarshipDetails