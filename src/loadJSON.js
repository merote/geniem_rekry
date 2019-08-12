//API fetchaus ja virheiden hallinta
export const getJSON = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos/')
    const json = await response.json()
    return json  
  } catch (err) {
    alert(err)
  }
  
}

