import { useRef } from 'react'
import useMaxG from '../Hooks/useMaxG'
import Button from 'react-bootstrap/Button'
import Form  from 'react-bootstrap/Form'
import { useSelector } from "react-redux/es/exports"
import { texts } from '../params/params'

function GMaxForm(){

    const [maxG, setDatas] = useMaxG({})
    const massInput = useRef(null)
    const newtonInput = useRef(null)
    const maxGDisplay = useRef(null)
    const cargoInput = useRef(null)
    const radioValue = useSelector(state => state.language.value)
    let formtitle = ''
    let describ = ''
    let massFieldLabel = ''
    let cargoLabel = ''
    let newtonsLabel = ''
    let calculateButtonLabel = ''
    let eraseButtonLabel = ''

    radioValue === '1'? formtitle = texts.gmaxform.french.title: formtitle = texts.gmaxform.english.title
    radioValue === '1'? describ = texts.gmaxform.french.description: describ = texts.gmaxform.english.description
    radioValue === '1'? massFieldLabel = texts.gmaxform.french.massfield: massFieldLabel = texts.gmaxform.english.massfield
    radioValue === '1'? cargoLabel = texts.gmaxform.french.cargo: cargoLabel = texts.gmaxform.english.cargo
    radioValue === '1'? newtonsLabel = texts.gmaxform.french.newtons: newtonsLabel = texts.gmaxform.english.newtons
    radioValue === '1'? calculateButtonLabel = texts.gmaxform.french.calculatebutton: calculateButtonLabel = texts.gmaxform.english.calculatebutton
    radioValue === '1'? eraseButtonLabel = texts.gmaxform.french.erasebutton: eraseButtonLabel = texts.gmaxform.english.erasebutton


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
            <h3 className='text-wrap'>{formtitle}</h3>
            <p className='text-wrap'>{describ}</p>
             <Form className='w-75 bg-light p-5 border border-secondary'>
                <Form.Group className="mb-3" controlId="massInput">
                <Form.Label>{massFieldLabel}<span class="badge bg-danger rounded-circle ms-3">1</span></Form.Label>
                <Form.Control type="number" ref={massInput} required={true}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="newtonInput">
                <Form.Label>{cargoLabel}</Form.Label>
                <Form.Control type="number" ref={cargoInput} required={true}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="newtonInput">
                <Form.Label>{newtonsLabel}<span class="badge bg-danger rounded-circle ms-3">2</span></Form.Label>
                <Form.Control type="number" ref={newtonInput} required={true}/>
                </Form.Group>
                
                <Button variant="primary" type="button" onClick={() => onFormVal()}>
                    {calculateButtonLabel}
                </Button>
                <Button variant="danger" type="button" onClick={() => onEraseForm()}>
                    {eraseButtonLabel}
                </Button>
            </Form>
            <p ref={maxGDisplay}>{isNaN(maxG)? "": maxG}</p>
        </div>       
    )
}

export default GMaxForm