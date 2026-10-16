import SimpleForm from './components/SimpleForm/SimpleForm'
import './App.css'
import FormAction from './components/FormAction/FormAction'
import ControlledField from './components/ControlledField/ControlledField'
function App() {


  return (
    <>
 
          <h1>Explore React Form</h1>
          <SimpleForm />
          <br />
          <br />
          <br />

          <FormAction></FormAction>
          <br />
          <br />
          <ControlledField></ControlledField>
    </>
  )
}

export default App
