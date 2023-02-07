import { useState, useRef } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Button from 'react-bootstrap/Button'
import Form  from 'react-bootstrap/Form'
import { texts } from './params/params'
import useMaxG from './Hooks/useMaxG'

function App() {

  const [radioValue, setRadioValue] = useState('1');
  const [maxG, setDatas] = useMaxG({})
  const massInput = useRef(null)
  const newtonInput = useRef(null)
  const maxGDisplay = useRef(null)

  let title = ""
  let describ = ""

  const radioButtons = [
    { name: 'Français', value: '1' },
    { name: 'English', value: '2' }]

  radioValue === '1'? title = texts.home.french.title: title = texts.home.english.title
  radioValue === '1'? describ = texts.home.french.description: describ = texts.home.english.description


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

  return (
    <div className="App container-fluid d-flex flex-column align-items-center">
      <header className="p-5 mb-3 bg-primary bg-gradient border position-relative rounded-3 w-100">
        <ButtonGroup className='position-absolute top-0 start-0 m-2' aria-label="Language select">
        {radioButtons.map((radio, idx) => (
          <ToggleButton
            key={`toggle-${idx}`}
            id={`radio-${idx}`}
            type="radio"
            variant={'light'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
        </ButtonGroup>
        <p className="text-white text-center fs-1">{title}</p>
      </header>
      <div className='p-5 mb-4 bg-light rounded-3 w-75'>
        <div className='container-fluid py-5'>
          <p className='fs-3'>{describ}</p>
        </div>
      </div>
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
          Calculer le maximum de G
        </Button>
        <Button variant="danger" type="button" onClick={() => onEraseForm()}>
          Effacer
        </Button>
      </Form>
      {isNaN(maxG)? "": <p ref={maxGDisplay}>{maxG}</p>}
    </div>
    
  );
}

export default App;
