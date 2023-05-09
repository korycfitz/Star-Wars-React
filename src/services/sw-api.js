const baseUrl = 'https://swapi.dev/api/'

export async function getAllStarships() {
  //get all the starship resources
  const res = await fetch(`${baseUrl}/starships`)
  return res.json()
}
export async function getStarship(starshipId) {
  //get a specific starship resource
  const res = await fetch(`${baseUrl}/starships/${starshipId}`)
  return await res.json()
}

export async function getPilots(pilotsURLs) {
  //view the JSON schema for pilot URLs
  const res = await fetch(`${baseUrl}/api/pilotsURLs`)
  return res.json()
}