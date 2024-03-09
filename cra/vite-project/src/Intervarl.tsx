import { useEffect, useState } from "react"

export default () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{

       const intervalId =    setInterval(()=>{
                    setCount(count + 1)
                    console.log(` Executei o count ${count} `)    

            },1000)

            return ()=> clearInterval(intervalId)

    },[count])

    return (
        <>
            <h2>A quantidade de count é {count} </h2>
        </>
    )
}