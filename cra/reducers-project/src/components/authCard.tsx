import { useContext } from "react"
import { Context } from "../contexts/context"
import { User } from "../types/UserReducer"

const AuthCard = () => 
{
const {state,dispatch} = useContext(Context) 
const handlerSignIn  = () => dispatch({type:'SIGNIN', payload:{user:{id:10,name:'Osmar'}}})
const handlerSignOut  = () => dispatch({type:'SIGNOUT'})

const userLogged:User | null = state.user.user ;

return (

    <>

        <h2>Usuario Logado {userLogged?.name} id {userLogged?.id}</h2>
        <button onClick={handlerSignIn} >
            Logar
        </button>
        <button onClick={handlerSignOut} >
            Deslogar
        </button>
    </>
)

}
export default AuthCard;