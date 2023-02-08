import { useRef } from 'react'
import useMaxG from '../Hooks/useMaxG'
import Button from 'react-bootstrap/Button'
import Form  from 'react-bootstrap/Form'

function GMaxForm(){

    const [maxG, setDatas] = useMaxG({})
    const massInput = useRef(null)
    const newtonInput = useRef(null)
    const maxGDisplay = useRef(null)
    const cargoInput = useRef(null)

    function onFormVal() {
        const massNumeric = Number(massInput.current.value)
        const newtonNumeric = Number(newtonInput.current.value)
        const cargoNumeric = Number(cargoInput.current.value)

        if( !isNaN(massNumeric) && !isNaN(newtonNumeric)) {
            const totalWeight =  massNumeric + cargoNumeric
            setDatas({mass:totalWeight, newton:newtonNumeric})
        }
    }
    
    function onEraseForm() {
    massInput.current.value = ''
    newtonInput.current.value = ''
    maxGDisplay.current.innerHTML = ''
    cargoInput.current.value = ''
    }

    return(
        <div className='w-50 p-5 d-flex flex-column align-items-center'>
            <h3 className='text-wrap'>Calculez le nombre de G maximum supporté par votre vaisseau</h3>
            <p className='text-wrap'>
                Entrez la masse de votre vaisseau, exprimée est Kt ou en tonnes dans le jeu.
                1 tonne = 1 000 Kg, un 1Kt = 1 000 000. 
                Pour un vaisseau de 15Kt, veuillez entrer 15000000 dans le champ Masse du vaisseau
                Pour 1 MN - Mega Newton veuillez entrer 1000000 dans le champ Newtons
            </p>
             <Form className='w-75 bg-light p-5 border border-secondary'>
                <Form.Group className="mb-3" controlId="massInput">
                <Form.Label>Masse du vaisseau</Form.Label>
                <Form.Control type="number" ref={massInput} required={true}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="newtonInput">
                <Form.Label>Tonnage de marchandise</Form.Label>
                <Form.Control type="number" ref={cargoInput} required={true}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="newtonInput">
                <Form.Label>Newtons</Form.Label>
                <Form.Control type="number" ref={newtonInput} required={true}/>
                </Form.Group>
                
                <Button variant="primary" type="button" onClick={() => onFormVal()}>
                Calculer
                </Button>
                <Button variant="danger" type="button" onClick={() => onEraseForm()}>
                Effacer
                </Button>
            </Form>
            <p ref={maxGDisplay}>{isNaN(maxG)? "": maxG}</p>
        </div>       
    )
}

export default GMaxForm