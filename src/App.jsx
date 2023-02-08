import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { texts } from './params/params'
import GMaxForm from './Componants/GMaxForm'
import MinNewtonForGForm from './Componants/MinNewtonForGForm'
import { useDispatch, useSelector } from "react-redux/es/exports"
import { update } from "./Redux/Language/languageSlice.jsx"


function App() {

  const dispatch = useDispatch()
  const radioValue = useSelector(state => state.language.value)
  
  let title = ""
  let describ = ""

  const radioButtons = [
    { name: 'Français', value: '1' },
    { name: 'English', value: '2' }]

  radioValue === '1'? title = texts.home.french.title: title = texts.home.english.title
  radioValue === '1'? describ = texts.home.french.description: describ = texts.home.english.description

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
            onChange={(e) => dispatch(update(e.currentTarget.value))}
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
      <div className='d-flex justify-content-between w-75'>
        <GMaxForm />
        <MinNewtonForGForm />
      </div>
    </div> 
  )
}

export default App;
