import { useState } from 'react'
import Person from './components/Person';

const App = () => {
  // state
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  // methods
  const handleNewChange = (event) => {
    setNewName(event.target.value);
  }

  const onNameSubmit = (event) => {
    event.preventDefault();

    // check if name is present
    let isNamePresent = false;
    for (const person of persons) {
      if (person.name.toLowerCase() === newName.toLowerCase()) {
        isNamePresent = true;
        break;
      }
    }

    // deal with namePresent or !namePresent
    if (isNamePresent) {
      alert(`${newName} is already on the phonebook.`)
    } else {

      const nameFromFrom = {
        name: newName
      }

      setPersons(persons.concat(nameFromFrom));
      setNewName('');
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNewChange} />
        </div>
        <div>
          <button onClick={onNameSubmit} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => <Person key={person.name} name={person.name} />)}
      </div>

    </div>
  )
}

export default App