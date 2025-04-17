//import {Link} from "react-router-dom"

function RecipePage ({recipeId, setRecipeId}){
    return(
        <>
            <p style={{fontSize: "50px", fontWeight: "bold"}}>{recipeId?.strMeal}</p>
            <img src={recipeId?.strMealThumb} style={{height: "400px"}}/>
            <p>{recipeId?.strYouTube}</p>
            <p>{recipeId?.strMeal}</p>
            <p>{recipeId?.strArea}</p>
            <p>{recipeId?.strCategory}</p>
            <p>{recipeId?.strInstructions}</p>
            <ul>{recipeId?.ingredients.map((ingredient, index)=> (<li key={index}>{ingredient}</li>))}</ul>
          
        </>
    )
}

export default RecipePage