export default () => {
    let frutas: string[] = ['maça', 'banana', 'pessego', 'pera'];
    return (
        <>
            <ul>
                {frutas.map((fr) => 
                    (<li>
                        {fr}
                    </li>))}
            </ul>
            <h1>
                CompB
            </h1>
        </>
    )
}