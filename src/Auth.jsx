import { useState } from "react";

function Auth({token}){
    const [auth, setAuth] = useState()

    async function handleCheck (){
        try{
            const response = await fetch("https://fsa-recipe.up.railway.app/api/auth/register",
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify{
                    
                }
            )
        }
    }
}