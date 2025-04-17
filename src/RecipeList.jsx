import { useNavigate } from "react-router-dom";

function RecipeList({recipes, setRecipes, favRecipe, setFavRecipe, recipeId, setRecipeId}){
     const navigate = useNavigate()

const handleclick2 = (recipeId) => {
    setRecipeId(recipeId)
    navigate("/recipepage")
}


    const handleclick = (recipe) => {
        setFavRecipe(recipe)
        navigate("/favorite")
    }

    return(
        <>
        {
            recipes.map((recipe)=> {
                const {idMeal, strMeal, StrCategory, strArea, strMealThumb} = recipe;
                return(
                    <div key={idMeal}>
                        <img src={strMealThumb} style={{height: "400px"}}/>
                        <h2>{strMeal}</h2>
                        <button onClick={()=> handleclick(recipe)}>Favorite</button>   
                        <button onClick={()=> handleclick2(recipeId)}>View Details</button>                     
                    </div>
                )
            })
        }
        </>
    )
}

export default RecipeList