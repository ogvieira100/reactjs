import { ChangeEvent, useState } from "react"

export default () => {
    
    const [customer,setCustomer] = useState({nome:'',idade:100})

    const hadlerChangeNome = (e:ChangeEvent<HTMLInputElement>)=>{

        setCustomer({...customer,nome:e.target.value})
    }

    const hadlerChangeIdade = (e:ChangeEvent<HTMLInputElement>)=>{

        setCustomer({...customer,idade: parseInt( e.target.value)})
    }

    return (
        <>
        Nome: <br />
        <input type="text" 
            name="nome" 
            value={customer.nome}
            onChange={hadlerChangeNome}
             />
             <br />
             Nome: <br />
        <input type="text" 
            name="idade" 
            value={customer.idade}
            onChange={hadlerChangeIdade}
             />
             <br />
             Nome:
             {customer.nome}
             <br />
             Idade:
             {customer.idade}
             <br />
        </>
    )
}