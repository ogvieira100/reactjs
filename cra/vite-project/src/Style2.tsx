import { useContext } from 'react'
import './cssfile.css'
import { ThemeContext } from './App'

export default () => {
    const context = useContext(ThemeContext)
 
    return (
        <>
    

            <div className="container2" >

                    Olá no estilo 2
                    Meu thema é {context.theme}
                    </div>
        </>
    )
}