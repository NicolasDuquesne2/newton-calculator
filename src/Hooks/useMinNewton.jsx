import { useState, useEffect } from "react";

function useMinNewton(inputs) {

    const [nMin, setNMin] = useState({})
    const [datas, setDatas] = useState(inputs)

    useEffect(() => {
        if(datas.mass && datas.g) {
            const mass = datas.mass
            const g = datas.g
            const newton = mass*9.81*g
            setNMin({minn: newton, acc: (newton/mass).toFixed(2)})
        }
    }, [datas.mass, datas.g]) 

    return [nMin, setDatas]

}

export default useMinNewton