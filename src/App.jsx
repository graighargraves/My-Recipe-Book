import { useEffect, useState } from 'react'
import './App.css'
import RecipeList from './RecipeList'
import {Routes, Route, Link} from 'react-router-dom'
import FavoriteRecipe from './FavoriteRecipe'
import RecipePage from './RecipePage.jsx'
import SignUp from './SignUp.jsx'

function App() {
const [recipes, setRecipes] = useState([])
const [favRecipe, setFavRecipe] = useState([])
const [token, setToken] = useState([])

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

{/* <div>
  {!token ? (
    <SignUp setToken={setToken} />
  ) : (
      <>
        <RecipeList
          recipes={recipes}
          setFavRecipe={setFavRecipe}
          token={token}
        />
        </>
  )
  }
</div> */}

<Routes>
  <Route path ="/" element={<RecipeList recipes={recipes} setRecipes={setRecipes} favRecipe={favRecipe} setFavRecipe={setFavRecipe}/>}/>
  <Route path="/favorite" element={<FavoriteRecipe favRecipe={favRecipe} setFavRecipe={setFavRecipe}/>}/>
  <Route path="/recipe/:id" element={<RecipePage recipes={recipes} />} />
</Routes>


    </>
  )
}

export default App
