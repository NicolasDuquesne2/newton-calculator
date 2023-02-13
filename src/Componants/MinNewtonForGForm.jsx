import { useRef } from 'react'
import { useSelector } from "react-redux/es/exports"
import Button from 'react-bootstrap/Button'
import Form  from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table';
import useMinNewton from '../Hooks/useMinNewton'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { texts } from '../params/params'

function MinNewtonForGForm(){

    const massInput = useRef(null)
    const gInput = useRef(null)
    const cargoInput = useRef(null)
    const minNDisplay = useRef(null)
    const accDisplay = useRef(null)
    const [nMin, setDatas] = useMinNewton({})
    const radioValue = useSelector(state => state.language.value)
    let formtitle = ''
    let describ = ''
    let massFieldLabel = ''
    let cargoLabel = ''
    let gLabel = ''
    let calculateButtonLabel = ''
    let eraseButtonLabel = ''
    let nMinLabel = ''
    let accLabel = ''
    let weightPlaceholder = ''
    let massTooltip = ''

    if ( radioValue === '1') {
        formtitle = texts.nminform.french.title
        describ = texts.nminform.french.description
        massFieldLabel = texts.nminform.french.massfield
        cargoLabel = texts.nminform.french.cargo
        gLabel = texts.nminform.french.g
        massTooltip = texts.nminform.french.massTooltip
        weightPlaceholder = texts.gmaxform.french.massplaceholder
        calculateButtonLabel = texts.nminform.french.calculatebutton
        eraseButtonLabel = texts.nminform.french.erasebutton
        nMinLabel = texts.nminTab.french.min
        accLabel = texts.nminTab.french.acc
    } else {
        formtitle = texts.nminform.english.title
        describ = texts.nminform.english.description
        massFieldLabel = texts.nminform.english.massfield
        cargoLabel = texts.nminform.english.cargo
        gLabel = texts.nminform.english.g
        massTooltip = texts.nminform.english.massTooltip
        weightPlaceholder = texts.gmaxform.english.massplaceholder
        calculateButtonLabel = texts.nminform.english.calculatebutton
        eraseButtonLabel = texts.nminform.english.erasebutton
        nMinLabel = texts.nminTab.english.min
        accLabel = texts.nminTab.english.acc
    }

    function castInNumber(stringArray) {
        return stringArray.map((stringVar) => {
            const cleaned = ("" + stringVar).replace(/\D/g, "")
            return Number(cleaned)
        })
    }


    function onFormVal() {

        const castedInNumber = castInNumber([massInput.current.value, gInput.current.value, cargoInput.current.value])
        const massNumeric = castedInNumber[0]*1000
        const gNumeric = castedInNumber[1]
        const cargoNumeric = castedInNumber[2]*1000
    
        if( !isNaN(massNumeric) && !isNaN(gNumeric) && !isNaN(cargoNumeric)) {
            const totalWeight =  massNumeric + cargoNumeric
            setDatas({mass: totalWeight, g: gNumeric})
        }
    }
    
    function onEraseForm() {
    massInput.current.value = ''
    gInput.current.value = ''
    cargoInput.current.value = ''
    minNDisplay.current.innerHTML = ''
    accDisplay.current.innerHTML = ''
    }

    function format(text) {
        const thousandsPatt = /\d{1,3}(?=(\d{3})+(?!\d))/g
        return String(text.replace(thousandsPatt, '$& '))
    }

    function onDigitChange(e) {

        let fieldVal = e.target.value
        const cleaned = ("" + fieldVal).replace(/\D/g, "")
        e.target.value = format(cleaned)
    }

    return(
        <div className='w-100 p-1 p-md-5 d-flex flex-column align-items-center'>
            <h3 className='text-wrap fs-4'>{formtitle}</h3>
            <p className='text-wrap'>{describ}</p>
             <Form className='w-100 bg-light p-5 border border-secondary mb-3'>
                <Form.Group className="mb-3" controlId="massInput">
                <Form.Label>{massFieldLabel}<span className="badge bg-danger rounded-circle ms-3">1</span></Form.Label>
                <OverlayTrigger placement='right' overlay={
                    <Tooltip >
                        {massTooltip}
                    </Tooltip>
                }>
                    <Form.Control type="text" ref={massInput} 
                              required={true} 
                              onInput={(e) => (onDigitChange(e))}
                              placeholder={weightPlaceholder}/>
                </OverlayTrigger>
                </Form.Group>

                <Form.Group className="mb-3" controlId="newtonInput">
                <Form.Label>{cargoLabel}</Form.Label>
                <OverlayTrigger placement='right' overlay={
                    <Tooltip >
                        {massTooltip}
                    </Tooltip>
                }>
                    <Form.Control type="text" 
                              ref={cargoInput} 
                              required={true} 
                              onInput={(e) => (onDigitChange(e))}
                              placeholder={weightPlaceholder}/>
                </OverlayTrigger>
                
                </Form.Group>

                <Form.Group className="mb-3" controlId="newtonInput">
                <Form.Label>{gLabel}</Form.Label>
                <Form.Control type="text" ref={gInput} required={true} onInput={(e) => (onDigitChange(e))}/>
                </Form.Group>
                <div className='d-flex justify-content-between'>
                    <Button variant="dark" type="button" onClick={() => onFormVal()}>
                        {calculateButtonLabel}
                    </Button>
                    <Button variant="secondary" type="button" onClick={() => onEraseForm()}>
                        {eraseButtonLabel}
                    </Button>
                </div>
            </Form>
            <Table striped bordered hover className='w-100'>
                <thead>
                    <tr>
                        <th>{nMinLabel}</th>
                        <th>{accLabel}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td ref={minNDisplay}>{Object.keys(nMin).length === 0? "": nMin.minn}</td>
                        <td ref={accDisplay}>{Object.keys(nMin).length === 0? "": nMin.acc}</td>
                    </tr>
                </tbody>
            </Table>
        </div>       
    )
}

export default MinNewtonForGForm