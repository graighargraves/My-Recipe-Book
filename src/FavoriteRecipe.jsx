

function FavoriteRecipe ({favRecipe, setFavRecipe}){
    return(
        <>
        <p style={{fontSize: "50px", fontWeight: "bold"}}>{favRecipe?.strMeal}</p>
        <img src={favRecipe?.strMealThumb} style={{height: "400px"}}/>
        <p>{favRecipe?.strYouTube}</p>
        <ul>{favRecipe?.ingredients.map((ingredient, index)=> (<li key={index}>{ingredient}</li>))}</ul>
        <button onClick={()=>setFavRecipe(null)}>Remove Favorite</button>
        </>
    )
}

export default FavoriteRecipe