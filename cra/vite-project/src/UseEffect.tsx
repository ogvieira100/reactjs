import { useEffect, useState } from "react"

export default () => {
    const [firstName,setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [fullName, setFullName] = useState('')

    useEffect(()=>
    {
            setFullName(`${firstName} ${lastName}`)

            return ()=> {

                console.log('final ciclo vida componente ')
            }

    },[firstName,lastName ])

    return (
        <>
        <h1>Utilizando Use Effect</h1>
        Name:
        <br />
          <input
                value={firstName}
                onChange={e => setFirstName( e.target.value )}
                type="text"
                name="nome"
                id="txtNome"
            />
            <br />
            LastName:
            <br />
            <input
                value={lastName}
                onChange={e => setLastName( e.target.value )}
                type="text"
                name="txtLast"
                id="txtLast"
            />
            <hr /> 
            <h1>Resultado Use Effect</h1>
            <h1>{fullName}</h1>
                     
        </>
    )
}