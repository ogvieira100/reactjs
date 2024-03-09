import { FormEvent } from "react"

export default () => {
  const formSubmit = (e:FormEvent)=> {
e.preventDefault();
alert('evento padrão submit desligado')

  }
    return (
        <>
        <form onSubmit={formSubmit} >
            <button type="submit" > Enviar</button>
            </form>          
        </>
    )
}