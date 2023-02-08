import { useRef } from 'react'
import useMaxG from '../Hooks/useMaxG'
import Button from 'react-bootstrap/Button'
import Form  from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table';
import { useSelector } from "react-redux/es/exports"
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

    if (radioValue === '1') {
        formtitle = texts.gmaxform.french.title
        describ = texts.gmaxform.french.description
        massFieldLabel = texts.gmaxform.french.massfield
        cargoLabel = texts.gmaxform.french.cargo
        newtonsLabel = texts.gmaxform.french.newtons
        calculateButtonLabel = texts.gmaxform.french.calculatebutton
        eraseButtonLabel = texts.gmaxform.french.erasebutton
        gmaxLabel = texts.gmaxTab.french.max
        accLabel = texts.gmaxTab.french.acc
    } else {
        formtitle = texts.gmaxform.english.title
        describ = texts.gmaxform.english.description
        massFieldLabel = texts.gmaxform.english.massfield
        cargoLabel = texts.gmaxform.english.cargo
        newtonsLabel = texts.gmaxform.english.newtons
        calculateButtonLabel = texts.gmaxform.english.calculatebutton
        eraseButtonLabel = texts.gmaxform.english.erasebutton
        gmaxLabel = texts.gmaxTab.english.max
        accLabel = texts.gmaxTab.english.acc
    }


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
    accDisplay.current.innerHTML = ''
    cargoInput.current.value = ''
    }

    //let o = {Object.keys(obj).length === 0? "": maxG.maxg}

    return(
        <div className='w-50 p-5 d-flex flex-column align-items-center'>
            <h3 className='text-wrap'>{formtitle}</h3>
            <p className='text-wrap'>{describ}</p>
             <Form className='w-75 bg-light p-5 border border-secondary mb-3'>
                <Form.Group className="mb-3" controlId="massInput">
                <Form.Label>{massFieldLabel}<span className="badge bg-danger rounded-circle ms-3">1</span></Form.Label>
                <Form.Control type="number" ref={massInput} required={true} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="newtonInput">
                <Form.Label>{cargoLabel}</Form.Label>
                <Form.Control type="number" ref={cargoInput} required={true}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="newtonInput">
                <Form.Label>{newtonsLabel}<span className="badge bg-danger rounded-circle ms-3">2</span></Form.Label>
                <Form.Control type="number" ref={newtonInput} required={true}/>
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