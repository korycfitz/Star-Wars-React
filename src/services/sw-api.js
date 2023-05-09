const baseUrl = 'https://swapi.dev/api/'

export async function getStarshipList() {
  //get all the starship resources
  const res = await fetch(`${baseUrl}starships`)
  return res.json()
}
export async function getStarship(starshipId) {
  const res = await fetch(`${baseUrl}starships/${starshipId}`)
  return await res.json()
}