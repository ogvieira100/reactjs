import { useContext } from "react"
import { Context } from "../contexts/context"
const Button =  () => {
const {state,dispatch}  = useContext(Context)

const handleClick = () =>
{

    if (state.theme.theme == "light")
    {
        dispatch({type:'CHANGE_THEME', payload:"dark"})
    }else dispatch({type:'CHANGE_THEME', payload:"light"})
} 

    return (

        <>
            <h2>o tema é {state.theme.theme}</h2>
           <button onClick={handleClick} >
            Mudar tema 
           </button>
        </>

    )
}

export default Button