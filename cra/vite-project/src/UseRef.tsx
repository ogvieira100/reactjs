import {useRef} from 'react'

export default () => {
    const inputEl = useRef<HTMLInputElement | null>(null)
        const handleClick  = () => {

                const inputElement:HTMLElement | null = document.getElementById('txtNome');
                if (inputElement)
                {
                         inputElement.style.backgroundColor = 'blue'
                }
        }
        const handleClick2  = () => {
            if (inputEl.current)
            {
                inputEl.current.style.backgroundColor = 'yellow'

            }
        }
    return (
        <>
        <input
        ref={inputEl}
        type="text" 
               name="txtNome" 
               id="txtNome" />
               <button onClick={handleClick} >Alterar cor input</button>
        </>
    )
}