import { useState, useEffect } from "react";

function useMinNewton(inputs) {

    const [nMin, setNMin] = useState(NaN)
    const [datas, setDatas] = useState(inputs)

    useEffect(() => {
        if(datas.mass && datas.g) {
            const mass = datas.mass
            const g = datas.g
            setNMin(mass*9.81*g)
        }
    }, [datas.mass, datas.g]) 

    return [nMin, setDatas]

}

export default useMinNewton