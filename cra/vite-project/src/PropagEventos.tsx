import {MouseEvent} from 'react'
export default () => {
   
   const evHandler = (e:MouseEvent)=>{

        e.stopPropagation();
        alert('Clickei no botão evento da div com propagação desabilitado')
   }
    return (
        <>
            <div onClick={()=> alert('Clickei Aqui')} style={{border:'2px solid red', padding:'10px'}} >
                <button  onClick={evHandler}  >
                    Clique em mim
                </button>
            </div>
        </>
    )
}