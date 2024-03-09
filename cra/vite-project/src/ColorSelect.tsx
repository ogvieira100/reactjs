import {forwardRef, useImperativeHandle, useState } from "react"


type dados = {

    nome:string, altura:number
}
type propColor = {
    yellow:() => void
    red:()=>void
    blue:()=>void
    funcParEntrada:(dados:dados)=> void
}

export default forwardRef((props:propColor, ref) => 
{
    const[colorYellow,setcolorYellow] = useState('white')

  const handlerYellowButton = () => {

        setcolorYellow('yellow');
    }

    useImperativeHandle(ref, () => ({
        handlerYellowButton
      }));

 
    return (
        <>
            <button style={{backgroundColor:colorYellow}} onClick={()=> props.yellow()} >
                yellow
            </button>
            <button onClick={()=> props.red()} >
                red
            </button>
            <button onClick={()=> props.blue()} >
                blue
            </button>
          
            <button onClick={()=> props.funcParEntrada({nome:'osmar',altura:1000}) } >
                func dados Entrada 
            </button>
        </>
    )
});