import { useDispatch, useSelector } from "react-redux/es/exports"
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Image from 'react-bootstrap/Image'
import { texts } from './params/params'
import GMaxForm from './Componants/GMaxForm'
import MinNewtonForGForm from './Componants/MinNewtonForGForm'
import { update } from "./Redux/Language/languageSlice.jsx"
import { images } from "./params/images"


function App() {

  const dispatch = useDispatch()
  const radioValue = useSelector(state => state.language.value)
  
  let title = ""
  let describ = ""
  let topImageDescrib = ""
  let massBadgeLabel = ""
  let newtonBadgeLabel = ""

  const radioButtons = [
    { name: 'Français', value: '1' },
    { name: 'English', value: '2' }]

  radioValue === '1'? title = texts.home.french.title: title = texts.home.english.title
  radioValue === '1'? describ = texts.home.french.description: describ = texts.home.english.description
  radioValue === '1'? topImageDescrib = texts.image.french.top: topImageDescrib = texts.image.english.top
  radioValue === '1'? massBadgeLabel = texts.image.french.badge1: massBadgeLabel = texts.image.english.badge1
  radioValue === '1'? newtonBadgeLabel = texts.image.french.badge2: newtonBadgeLabel = texts.image.english.badge2
  

  return (
    <div className="App container-fluid d-flex flex-column align-items-center">
      <header className="p-5 mb-3 bg-primary bg-gradient border position-relative rounded-3 w-100 sticky-top">
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
      <div className='p-5 mb-4 bg-light w-75'>
        <p className="fs-4">{topImageDescrib}</p>
        <Image src={images.panelStats} className='object-fit-fill w-100'></Image>
        <p><span class="badge bg-danger rounded-circle ">1</span> {massBadgeLabel}</p>
        <p><span class="badge bg-danger rounded-circle ">2</span> {newtonBadgeLabel}</p>
      </div>
      <div className='d-flex justify-content-between w-75'>
        <GMaxForm />
        <MinNewtonForGForm />
      </div>
    </div> 
  )
}

export default App;
