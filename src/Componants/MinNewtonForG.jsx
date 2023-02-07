import { useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Form  from 'react-bootstrap/Form'
import useMinNewton from '../Hooks/useMinNewton'

function MinNewtonForG(){

    const massInput = useRef(null)
    const gInput = useRef(null)
    const cargoInput = useRef(null)
    const maxGDisplay = useRef(null)
    const [nMin, setDatas] = useMinNewton({})

    function onFormVal() {
        const massNumeric = Number(massInput.current.value)
        const gNumeric = Number(gInput.current.value)
        const cargoNumeric = Number(cargoInput.current.value)
    
        if( !isNaN(massNumeric) && !isNaN(gNumeric) && !isNaN(cargoNumeric)) {
            const totalWeight =  massNumeric + cargoNumeric
            setDatas({mass: totalWeight, g: gNumeric})
        }
    }
    
    function onEraseForm() {
    massInput.current.value = ''
    gInput.current.value = ''
    cargoInput.current.value = ''
    maxGDisplay.current.outerHTML = ''
    }

    return(
        <div className='w-25'>
            <h3 className='text-wrap'>Calculez le nombre de Newton nécessaire pour la masse de votre vaisseau et du nombre de G visé</h3>
            <pre className='text-wrap'>
                Entrez la masse de votre vaisseau, exprimée est Kt ou en tonnes dans le jeu.
                1 tonne = 1 000 Kg, un 1Kt = 1 000 000. 
                Pour un vaisseau de 15Kt, veuillez entrer 15000000 dans le champ Masse du vaisseau
                Veuillez entrer le nombre de G visés, dans le champ du nombre de G
            </pre>
             <Form>
                <Form.Group className="mb-3" controlId="massInput">
                <Form.Label>Masse du vaisseau</Form.Label>
                <Form.Control type="number" ref={massInput} required={true}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="newtonInput">
                <Form.Label>Tonnage de marchandise</Form.Label>
                <Form.Control type="number" ref={cargoInput} required={true}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="newtonInput">
                <Form.Label>Nombre de G</Form.Label>
                <Form.Control type="number" ref={gInput} required={true}/>
                </Form.Group>
            
                <Button variant="primary" type="button" onClick={() => onFormVal()}>
                Calculer
                </Button>
                <Button variant="danger" type="button" onClick={() => onEraseForm()}>
                Effacer
                </Button>
            </Form>
            {isNaN(nMin)? "": <p ref={maxGDisplay}>{nMin}</p>}
        </div>       
    )
}

export default MinNewtonForG