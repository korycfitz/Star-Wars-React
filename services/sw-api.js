const baseUrl = 'https://swapi.dev/api/starships/9/'

export async function getAllStarships() {
  //get all the starship resources
  const res = await fetch(`${baseUrl}/api/starships`)
  return res.json()
}
export async function getStarship(starshipId) {
  //get a specific starship resource
  const res = await fetch(`${baseUrl}/api/starships/${starshipId}`)
  return res.json()
}

export async function getSpells() {
  //iew the JSON schema for this resource
  const res = await fetch(`${baseUrl}/api/schemaNamePlural`)
  return res.json()
}