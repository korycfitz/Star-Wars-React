import { useState, useEffect } from "react"
import { getAllStarships } from "../../services/sw-api"
import { Link } from 'react-router-dom'
const MonsterList = () => {
  const [monsterList, setMonsterList] = useState([])
  
  useEffect(()=> {
    const fetchMonsterList = async () => {
      const monsterData = await getMonsterList()
      setMonsterList(monsterData)
    }
    fetchMonsterList()
  }, [])

  if (!monsterList.length) return <h1>Loading scary monsters...</h1>

  return (
    <main className="monster-list">
      <h1>Monster List (OMG SCARY)</h1>
      {monsterList.map(monster =>
        <div key={monster._id} className="link-container">
          <Link to={`/monsters/${monster._id}`}>{monster.name}</Link>
        </div>  
      )}
    </main> 
  )
}

export default MonsterList