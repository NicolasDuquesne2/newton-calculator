import { useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Form  from 'react-bootstrap/Form'
import useMinNewton from '../Hooks/useMinNewton'
import { useSelector } from "react-redux/es/exports"
import { texts } from '../params/params'

function MinNewtonForGForm(){

    const massInput = useRef(null)
    const gInput = useRef(null)
    const cargoInput = useRef(null)
    const maxGDisplay = useRef(null)
    const [nMin, setDatas] = useMinNewton({})
    const radioValue = useSelector(state => state.language.value)
    let formtitle = ''
    let describ = ''
    let massFieldLabel = ''
    let cargoLabel = ''
    let gLabel = ''
    let calculateButtonLabel = ''
    let eraseButtonLabel = ''

    radioValue === '1'? formtitle = texts.nminform.french.title: formtitle = texts.nminform.english.title
    radioValue === '1'? describ = texts.nminform.french.description: describ = texts.nminform.english.description
    radioValue === '1'? massFieldLabel = texts.nminform.french.massfield: massFieldLabel = texts.nminform.english.massfield
    radioValue === '1'? cargoLabel = texts.nminform.french.cargo: cargoLabel = texts.nminform.english.cargo
    radioValue === '1'? gLabel = texts.nminform.french.g: gLabel = texts.nminform.english.g
    radioValue === '1'? calculateButtonLabel = texts.nminform.french.calculatebutton: calculateButtonLabel = texts.nminform.english.calculatebutton
    radioValue === '1'? eraseButtonLabel = texts.nminform.french.erasebutton: eraseButtonLabel = texts.nminform.english.erasebutton

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
        <div className='w-50 p-5 d-flex flex-column align-items-center'>
            <h3 className='text-wrap'>{formtitle}</h3>
            <p className='text-wrap'>{describ}</p>
             <Form className='w-75 bg-light p-5 border border-secondary'>
                <Form.Group className="mb-3" controlId="massInput">
                <Form.Label>{massFieldLabel}</Form.Label>
                <Form.Control type="number" ref={massInput} required={true}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="newtonInput">
                <Form.Label>{cargoLabel}</Form.Label>
                <Form.Control type="number" ref={cargoInput} required={true}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="newtonInput">
                <Form.Label>{gLabel}</Form.Label>
                <Form.Control type="number" ref={gInput} required={true}/>
                </Form.Group>
            
                <Button variant="primary" type="button" onClick={() => onFormVal()}>
                {calculateButtonLabel}
                </Button>
                <Button variant="danger" type="button" onClick={() => onEraseForm()}>
                {eraseButtonLabel}
                </Button>
            </Form>
            {isNaN(nMin)? "": <p ref={maxGDisplay}>{nMin}</p>}
        </div>       
    )
}

export default MinNewtonForGForm