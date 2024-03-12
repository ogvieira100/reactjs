import { CSSProperties, useContext } from "react"
import { container } from './Css'
import { ThemeContext } from "./App"

export default () => {

    const context = useContext(ThemeContext)

    const handler = () => {

        context.setTheme('dark');
    }

    return (
        <>
            <div style={container} >

                Olá no estilo 1
                Meu thema é {context.theme}

                <button onClick={handler} >
                    mudar thema para dark
                </button>
            </div>
        </>
    )
}