import { useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
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

  // event handlers
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

      <Filter nameSearch={nameSearch} handleNameSearch={handleNameSearch} />

      <h2>Add a new</h2>

      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNewChange={handleNewChange}
        handleNumberChange={handleNumberChange}
        onNameSubmit={onNameSubmit}
      />

      <h2>Numbers</h2>

      <Persons persons={persons} showAll={showAll} nameSearch={nameSearch} />

    </div>
  )
}

export default App