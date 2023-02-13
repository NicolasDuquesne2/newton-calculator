import { useRef } from 'react'
import { useSelector } from "react-redux/es/exports"
import useMaxG from '../Hooks/useMaxG'
import Button from 'react-bootstrap/Button'
import Form  from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { texts } from '../params/params'

function GMaxForm(){

    const [maxG, setDatas] = useMaxG({})
    const massInput = useRef(null)
    const newtonInput = useRef(null)
    const maxGDisplay = useRef(null)
    const accDisplay = useRef(null)
    const cargoInput = useRef(null)
    const radioValue = useSelector(state => state.language.value)
    let formtitle = ''
    let describ = ''
    let massFieldLabel = ''
    let cargoLabel = ''
    let newtonsLabel = ''
    let calculateButtonLabel = ''
    let eraseButtonLabel = ''
    let gmaxLabel = ''
    let accLabel = ''
    let weightPlaceholder = ''
    let newtonPlaceholder = ''
    let massTooltip = ''
    let newtonToolTip = ''

    if (radioValue === '1') {
        formtitle = texts.gmaxform.french.title
        describ = texts.gmaxform.french.description
        massFieldLabel = texts.gmaxform.french.massfield
        cargoLabel = texts.gmaxform.french.cargo
        newtonsLabel = texts.gmaxform.french.newtons
        weightPlaceholder = texts.gmaxform.french.massplaceholder
        newtonPlaceholder = texts.gmaxform.french.newtonplaceholder
        massTooltip = texts.gmaxform.french.massTooltip
        newtonToolTip = texts.gmaxform.french.newtonTooltip
        calculateButtonLabel = texts.gmaxform.french.calculatebutton
        eraseButtonLabel = texts.gmaxform.french.erasebutton
        gmaxLabel = texts.gmaxTab.french.max
        accLabel = texts.gmaxTab.french.acc
    } else {
        formtitle = texts.gmaxform.english.title
        describ = texts.gmaxform.english.description
        massFieldLabel = texts.gmaxform.english.massfield
        cargoLabel = texts.gmaxform.english.cargo
        weightPlaceholder = texts.gmaxform.english.massplaceholder
        newtonPlaceholder = texts.gmaxform.english.newtonplaceholder
        newtonsLabel = texts.gmaxform.english.newtons
        massTooltip = texts.gmaxform.english.massTooltip
        newtonToolTip = texts.gmaxform.english.newtonTooltip
        calculateButtonLabel = texts.gmaxform.english.calculatebutton
        eraseButtonLabel = texts.gmaxform.english.erasebutton
        gmaxLabel = texts.gmaxTab.english.max
        accLabel = texts.gmaxTab.english.acc
    }

    function castInNumber(stringArray) {
        return stringArray.map((stringVar) => {
            const cleaned = ("" + stringVar).replace(/\D/g, "")
            return Number(cleaned)
        })
    }

    function onFormVal() {
        
        const castedInNumber = castInNumber([massInput.current.value, newtonInput.current.value, cargoInput.current.value])
        const massNumeric = castedInNumber[0]*1000
        const newtonNumeric = castedInNumber[1]*1000
        const cargoNumeric = castedInNumber[2]*1000
    
        if( !isNaN(massNumeric) && !isNaN(newtonNumeric)) {
            const totalWeight =  massNumeric + cargoNumeric
            setDatas({mass:totalWeight, newton:newtonNumeric})
        }
    }
    
    function onEraseForm() {
        massInput.current.value = ''
        newtonInput.current.value = ''
        maxGDisplay.current.innerHTML = ''
        accDisplay.current.innerHTML = ''
        cargoInput.current.value = ''
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
                    <Form.Control type="text" 
                                ref={massInput} 
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
                <Form.Label>{newtonsLabel}<span className="badge bg-danger rounded-circle ms-3">2</span></Form.Label>
                <OverlayTrigger placement='right' overlay={
                    <Tooltip >
                       {newtonToolTip} 
                    </Tooltip>
                }>
                    <Form.Control type="text" 
                              ref={newtonInput} 
                              required={true} 
                              onInput={(e) => (onDigitChange(e))}
                              placeholder={newtonPlaceholder}/>
                </OverlayTrigger>
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
                        <th>{gmaxLabel}</th>
                        <th>{accLabel}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td ref={maxGDisplay}>{Object.keys(maxG).length === 0? "": maxG.maxg}</td>
                        <td ref={accDisplay}>{Object.keys(maxG).length === 0? "": maxG.acc}</td>
                    </tr>
                </tbody>
            </Table>
        </div>       
    )
}

export default GMaxForm