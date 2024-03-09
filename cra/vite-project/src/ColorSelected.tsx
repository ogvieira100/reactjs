
import ColorSelect from './ColorSelect'
import  { ReactElement, useState } from 'react'
import {useRef} from 'react'
 

export default () => {
   
    const[color,setColor]   = useState('blue');
    const elColorSelect  = useRef(null)

    const yellowFunc = () => {
       
        setColor('yellow')  
        
    }
    const redFunc = () => setColor('red') 
    const blueFunc = () =>  setColor('blue')
    
    const handleSetColorPanel = () => {

        if (elColorSelect.current)
        {
            elColorSelect.current.handlerYellowButton();
        }
    }
   
   
    return (
        <>
        <div style={{backgroundColor:color, width:'100%',height:'100px'}} >
            fui pintado pelo componente abaixo 
        </div>
        <button onClick={handleSetColorPanel} >
                Mudar cor buton para yellow
        </button>
         <ColorSelect 
          ref={elColorSelect}
          yellow={yellowFunc}
          funcParEntrada={ (datas)=> alert( `nome vindo do filho ${datas.nome} altura vindo do filho ${datas.altura} `  ) } 
          red={redFunc} 
          blue={blueFunc} >
         </ColorSelect>
        </>
    )
}