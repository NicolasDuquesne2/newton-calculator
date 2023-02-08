import { useState, useEffect } from "react";

function useMaxG(inputs) {

    const [gMax, setGMax] = useState({})
    const [datas, setDatas] = useState(inputs)

    useEffect(() => {
        if(datas.mass && datas.newton) {
            const mass = datas.mass
            const newton = datas.newton
            setGMax({maxg: (newton/(mass*9.81)).toFixed(2), acc: (newton/mass).toFixed(2)})
        }
    }, [datas.mass, datas.newton]) 

    return [gMax, setDatas]

}

export default useMaxG