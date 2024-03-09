import { useState } from "react"

export default () => {

    const [logged, setLogged] = useState(false)
    const logar = () => {

        setLogged(!logged);
    }

    return (
        <>
        {logged &&
            <h1>Usuario Logado</h1>
        }
            <button onClick={logar} >
                {logged ? (<span>deslogar</span> ) :( <span>logar</span> )}
            </button>
        </>

    )
}