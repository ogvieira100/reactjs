 const Eventos = () => {


    let btnClicar = () => {alert('clicou')}
    
    return (

            <>
                <button title="btn" onClick={btnClicar}  >
                    Clicar
                </button>
                <button title="btn" onClick={()=> btnClicar()}  >
                    Clicar dois
                </button>
            </>

    )

}
export default Eventos;