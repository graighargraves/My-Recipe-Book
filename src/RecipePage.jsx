import {useParams} from "react-router-dom"

function RecipePage ({recipes, setRecipes}){
    const { id } = useParams()

    const recipe = recipes.find((r)=> r.idMeal === id)

    if (!recipe) return <p>Recipe not found!</p>
    return(
        <>

            <p style={{fontSize: "50px", fontWeight: "bold"}}>{recipe?.strMeal}</p>
            <img src={recipe?.strMealThumb} style={{height: "400px"}}/>
            <p>{recipe?.strYouTube}</p>
            <p>{recipe?.strMeal}</p>
            <p>{recipe?.strArea}</p>
            <p>{recipe?.strCategory}</p>
            <p>{recipe?.strInstructions}</p>
            <ul>{recipe?.ingredients.map((ingredient, index)=> (<li key={index}>{ingredient}</li>))}</ul>
          
        </>
    )
}

export default RecipePage