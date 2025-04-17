import { useEffect, useState } from 'react'
import './App.css'
import RecipeList from './RecipeList'
import {Routes, Route, Link} from 'react-router-dom'
import FavoriteRecipe from './FavoriteRecipe'
import RecipePage from './RecipePage.jsx'


function App() {
const [recipes, setRecipes] = useState([])
const [favRecipe, setFavRecipe] = useState([])
const [recipeId, setRecipeId] = useState([])

  useEffect(()=>{
    
    const getRecipes = async () => {
      const res = await fetch("https://fsa-recipe.up.railway.app/api/recipes")
      const data = await res.json()
      console.log(data)
      setRecipes(data)
    } 
    getRecipes()
  }, [])

  return (
    <>
    <nav style={{display:"flex", justifyContent:"space-between", fontSize: "50px"}}>
    <Link to="/">Home</Link>
    <Link to="/favorite">Favorite</Link>
    </nav>

<Routes>
  <Route path ="/" element={<RecipeList recipes={recipes} setRecipes={setRecipes} favRecipe={favRecipe} setFavRecipe={setFavRecipe}/>}/>
  <Route path="/favorite" element={<FavoriteRecipe favRecipe={favRecipe} setFavRecipe={setFavRecipe}/>}/>
  <Route path="/recipepage" element={<RecipePage recipeId={recipeId} setRecipeId={setRecipeId} recipes={recipes} setRecipes={setRecipes}/>}/>
</Routes>


    </>
  )
}

export default App
