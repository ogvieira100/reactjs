import { useReducer, useState } from "react"
type TaskState = string[]
type TaskAction = {
   type:'add',
   payload:string;
}

const reducer = (state:TaskState ,action:TaskAction):TaskState =>{
        if (action.type == 'add' &&  action.payload)
            return [...state, action.payload]

        return state;
}


export default () => {


    const [tasks,dispatch] = useReducer(reducer, [])
    const [inputValue, setInputValue] = useState('')

    const handleClick  =()=> 
    {

        dispatch({type:'add',payload:inputValue})
        setInputValue('');
    }

    return (
        <>
        <h1>Exemplo de reducer</h1>
            <input
            placeholder="digite a tarefa"
             type="text"
             name="txtmaterias" 
             id="txtmaterias"
              value={inputValue} 
              onChange={e=> setInputValue(e.target.value)} />

              <button onClick={handleClick} >
                    Adicionar na lista                
              </button>

              <ul>
              {tasks.map((mp,key)=>  ( <li key={key} > {mp} </li> )  )}
              </ul>
        </>
    )
}