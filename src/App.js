import { useState, useEffect } from "react"
import React from 'react'
import './App.css'
import Recipe from "./components/Recipes"

const App = ()=> {
const APP_ID ='fa6039c9';
const APP_KEY ='b6eace0ce8145ac61f5a75ff5314c2dd';
const [recipes,setRecipes] =useState([])
const [search,setSearch] = useState('')
const [query,setQuery] =useState("momo")


const getRecipes = async () =>{
  const response= await  fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await response.json()
  // console.log("res",response)
  // console.log("dada",data)
  setRecipes(data.hits)
}

const getSearch =(e)=> {
  e.preventDefault()
  
  // alert("hiii")
setQuery(search)
setSearch("")

}

useEffect(()=>{
getRecipes()
},[query])

return (
  
  <div className='App'>
    {/* <img src="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/hive/binaries/451130.jpg" className="image"/> */}
  <form className="search-form" onSubmit={(e)=>getSearch(e)}>
    <input placeholder="Serch An food Item..." type="text" className="search-bar" value={search} onChange={e=>setSearch(e.target.value)}/>
    <button type="submit"className="search-button">Search</button>

  </form>
  <div className="recipes">
  {recipes.map(rec=> <Recipe
  key={rec.recipe.label}
   title ={rec.recipe.label}
   mealType ={rec.recipe.mealType}
   ingredients ={rec.recipe.ingredients}
   calories ={rec.recipe.calories}
   image = {rec.recipe.image}  />)}
  </div>

  </div>

)

}


export default App