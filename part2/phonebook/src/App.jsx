import { useState } from 'react'
import Person from './components/Person';

const App = () => {
  // state
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameSearch, setNameSearch] = useState('')
  const [showAll, setShowAll] = useState(true);

  // atts
  const personsToShow = showAll ? persons : persons.filter(person => person.name.toLowerCase().includes(nameSearch.toLowerCase()));

  // methods
  const handleNewChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const onNameSubmit = (event) => {
    event.preventDefault();

    //check if empty
    if (newName === '' || newNumber == '') {
      alert('Please fill name and phone.')
      return;
    }

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
        name: newName,
        number: newNumber
      }

      setPersons(persons.concat(nameFromFrom));
      setNewName('');
      setNewNumber('')
    }

  }

  const handleNameSearch = (event) => {

    setNameSearch(event.target.value);

    if (event.target.value.length > 0) {
      setShowAll(false);
    } else {
      setShowAll(true);
    }

  }

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        Filter shown with <input type="text" value={nameSearch} onChange={handleNameSearch} />
      </div>
      <h2>Add a new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNewChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button onClick={onNameSubmit} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {personsToShow.map(person => <Person key={person.name} name={person.name} number={person.number} />)}
      </div>

    </div>
  )
}

export default App