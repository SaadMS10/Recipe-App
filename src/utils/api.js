// const API_ID = process.env.REACT_APP_API_ID
// const APP_KEY = process.env.REACT_APP_APP_KEY
//You Are Advised To Change The Id and the Key
//This ID and Key Belongs To Muhmmad Saad


const API_ID = "0ba90019"
const APP_KEY = '846871faae3995ec4372d4c8ac9d2e79'


export function fetchRecipes (food = '') {
  food = food.trim()

  return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
    .then((res) => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe)
    )
  
} 