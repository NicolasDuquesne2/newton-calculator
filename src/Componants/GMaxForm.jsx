import { useRef } from 'react'
import useMaxG from './Hooks/useMaxG'
import Button from 'react-bootstrap/Button'
import Form  from 'react-bootstrap/Form'

function GMaxForm(){

    const [maxG, setDatas] = useMaxG({})
    const massInput = useRef(null)
    const newtonInput = useRef(null)
    const maxGDisplay = useRef(null)

    function onFormVal() {
        const massNumeric = Number(massInput.current.value)
        const newtonNumeric = Number(newtonInput.current.value)
    
        if( !isNaN(massNumeric) && !isNaN(newtonNumeric)) {
          setDatas({mass:massNumeric, newton:newtonNumeric})
        }
    }
    
    function onEraseForm() {
    massInput.current.value = ''
    newtonInput.current.value = ''
    maxGDisplay.current.outerHTML = ''
    }

    return(
        <div>
             <Form>
                <Form.Group className="mb-3" controlId="massInput">
                <Form.Label>Masse du vaisseau</Form.Label>
                <Form.Control type="number" ref={massInput} required={true}/>
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
            {isNaN(maxG)? "": <p ref={maxGDisplay}>{maxG}</p>}
        </div>       
    )
}

export default GMaxForm