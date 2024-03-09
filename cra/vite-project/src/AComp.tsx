type propEstudante = {
    name?:string ;
    age?:number;
}

const A = ({name = 'Osmar',age}:propEstudante) => {

    const formatName = (valor: string) => valor.toUpperCase();


    if ((age ?? 0) > 10) {
        return (<>
            <p>
                Estudante maior que 10 anos
            </p>
        </>)
    }


    return (<>

        <h2>Usado com exportação default import Def from './AComp' ex:.  Def  </h2>
        <h3>Meu nome é {name}</h3>
        <p>
            Nome Estudante <br />
            {formatName(name ?? '' )}
        </p>
        <p>
            Idade Estudante <br />
            {age}
        </p>
    </>)

}
export default A;