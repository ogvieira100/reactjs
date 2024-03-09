import { useState } from "react"

type task =
    {
        nome: string
        idade: number
    }

export default () => {

    const [tasks, setTasks] = useState<task[]>([])
    const [input, setInputValue] = useState<task>({ nome: '', idade: 0 });

    const handleAdd = () => {
        if (!input) return
        setTasks([...tasks, input]);
        setInputValue({ nome: '', idade: 0 })
    }


    return (
        <>
            <table>
            <thead>
                    <tr>
                        <td>
                            Nome
                        </td>
                        <td>
                            Idade
                        </td>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                       
                        {input.nome}
                    </td>
                    <td>
                      
                        {input.idade}
                    </td>
                </tr>
                </tbody>
                <tfoot></tfoot>
            </table>
            <hr />
            <br />
            <h1>Minha Lista de Tarefas</h1>
            <input
                value={input.nome}
                onChange={e => setInputValue({ ...input, nome: e.target.value })}
                type="text"
                name="nome"
                id="txtNome"
            />
            <br />
            <input
                value={input?.idade}
                onChange={e => setInputValue({ ...input, idade: parseInt(e.target.value) })}
                type="text"
                name="idade"
                id="txtIdade"
            />
            <hr />
            <button onClick={handleAdd} >
                Adicionar
            </button>
            <h1>
                Itens da Tabela
            </h1>
           {/*  <ul>
                    {tasks.map((value,key)=>  ( <li key={key} > {value.nome} {value.idade}</li> )  )}
            </ul> */}
            <table style={{border:'1px solid red'}}>
                <thead>
                    <tr>
                        <td>
                            Nome
                        </td>
                        <td>
                            Idade
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((mp,key)=>  ( <tr key={key} > <td>{mp.nome}</td> <td>{mp.idade}</td> </tr> )  )}
                </tbody>
                  <tfoot></tfoot>
            </table>
        </>
    )
}