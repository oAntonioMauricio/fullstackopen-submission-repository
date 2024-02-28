import Person from "./Person";

const Persons = (props) => {

    const { persons, showAll, nameSearch, handlePersonDelete } = props;

    const personsToShow = showAll ? persons : persons.filter(person => person.name.toLowerCase().includes(nameSearch.toLowerCase()));

    return (
        <div>
            {personsToShow.map(person => <Person
                key={person.id}
                name={person.name}
                number={person.number}
                handlePersonDelete={() => handlePersonDelete(person.id)}
            />)}
        </div>
    )
}

export default Persons;