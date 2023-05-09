import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getStarship } from "../../services/api-calls"
import { Link } from "react-router-dom"

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  
  const { starshipId } = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      const StarshipData = await getStarship(StarshipId)
      setStarshipDetails(StarshipData)
    }
    fetchDetails()
  }, [StarshipId])

  if (!StarshipDetails.name) return <h1>Loading details...</h1>

  return (
    <main className="Starship-details">
      <h1>Starship Deets</h1>
      {StarshipDetails.image ? 
        <img 
          src={`https://www.dnd5eapi.co${StarshipDetails.image}`} 
          alt={`A (scary) ${StarshipDetails.name}`} 
          style={{ width: '320px'}}
        />
        :  
        <img 
          src="http://theoldreader.com/kittens/320/240/" 
          alt="A cat" 
        />
      }
      <h2>{StarshipDetails.name}</h2>
      <h3>Size: {StarshipDetails.size}</h3>
      <h3>Type: {StarshipDetails.type}</h3>
      <h3>Actions:</h3>
      {!StarshipDetails.actions?.length &&
        <h4>This poor Starship has no actions. Womp womp.</h4>
      }
      {StarshipDetails.actions?.map(action => (
        <div key={action.name} className="subsection">
          <h4>{action.name}</h4>
          <p>{action.desc}</p>
        </div>
      ))}
    </main>
  )
}

export default StarshipDetails