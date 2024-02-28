import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personsService from './services/persons';

const App = () => {
  // state
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameSearch, setNameSearch] = useState('')
  const [showAll, setShowAll] = useState(true);

  // get data from server
  useEffect(() => {
    console.log('effect');
    personsService
      .getAll()
      .then(data => {
        setPersons(data);
      })
  }, [])

  console.log('redering', persons);

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

      personsService
        .createPerson(nameFromFrom)
        .then(personCreated => {
          setPersons(persons.concat(personCreated));
          setNewName('');
          setNewNumber('');
        })
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

  const handlePersonDelete = (key) => {

    let person = persons.find(person => person.id === key);

    if (window.confirm(`Delete ${person.name}?`)) {
      personsService
        .deletePerson(key)
        .then(deletedPerson => {
          setPersons(persons.filter(person => person.id !== key))
        })
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

      <Persons persons={persons} showAll={showAll} nameSearch={nameSearch} handlePersonDelete={handlePersonDelete} />

    </div>
  )
}

export default App