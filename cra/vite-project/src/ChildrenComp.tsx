import { ReactElement } from "react"

type Props = {

    children:ReactElement
}

const Children = ({children}:Props) =>{

    return (
        <>
        <h1>exemplo de componente pai abaixo o filho.</h1>
            <div  style={{border:'1px solid red', width:'100vw', height:'100vh'}} >
                {children}
            </div>
        </>
    )

}
export default Children