import { useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Form  from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table';
import useMinNewton from '../Hooks/useMinNewton'
import { useSelector } from "react-redux/es/exports"
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

    if ( radioValue === '1') {
        formtitle = texts.nminform.french.title
        describ = texts.nminform.french.description
        massFieldLabel = texts.nminform.french.massfield
        cargoLabel = texts.nminform.french.cargo
        gLabel = texts.nminform.french.g
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
        calculateButtonLabel = texts.nminform.english.calculatebutton
        eraseButtonLabel = texts.nminform.english.erasebutton
        nMinLabel = texts.nminTab.english.min
        accLabel = texts.nminTab.english.acc
    }


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
    minNDisplay.current.innerHTML = ''
    accDisplay.current.innerHTML = ''
    }

    //{Object.keys(nMin).length === 0? "": nMin.minn}

    return(
        <div className='w-50 p-5 d-flex flex-column align-items-center'>
            <h3 className='text-wrap'>{formtitle}</h3>
            <p className='text-wrap'>{describ}</p>
             <Form className='w-75 bg-light p-5 border border-secondary mb-3'>
                <Form.Group className="mb-3" controlId="massInput">
                <Form.Label>{massFieldLabel}<span className="badge bg-danger rounded-circle ms-3">1</span></Form.Label>
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
            <Table striped bordered hover className='w-75'>
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