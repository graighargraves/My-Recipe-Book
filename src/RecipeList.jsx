import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SignUp from './SignUp'


function RecipeList({recipes, setRecipes, favRecipe, setFavRecipe, recipeId, setRecipeId}){
     const navigate = useNavigate()

    const handleclick = (recipe) => {
        // if (!token) {
        //     alert("Please sign up!")
        //     return
        // }
        setFavRecipe(recipe)
        navigate("/favorite")
    }

    return(
        <>
        <div>
            <SignUp/>
            </div>
        <br></br>
        
        {
            recipes.map((recipe)=> {
                const {idMeal, strMeal, StrCategory, strArea, strMealThumb} = recipe;
                return(
                    <div key={idMeal}>
                        <img src={strMealThumb} style={{height: "400px"}}/>
                        <h2>{strMeal}</h2>
                        <button onClick={()=> handleclick(recipe)}>Favorite</button>   
                        <Link to={`/recipe/${recipe.idMeal}`}>View Details</Link>                     
                    </div>
                )
            })
        }
        </>
    )
}

export default RecipeList