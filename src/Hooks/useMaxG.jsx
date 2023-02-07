import { useState, useEffect } from "react";

function useMaxG(inputs) {

    const [gMax, setGMax] = useState(NaN)
    const [datas, setDatas] = useState(inputs)

    useEffect(() => {
        if(datas.mass && datas.newton) {
            const mass = datas.mass
            const newton = datas.newton
            setGMax(newton/(mass*9.81))
        }
    }, [datas.mass, datas.newton]) 

    return [gMax, setDatas]

}

export default useMaxG