import Person from "./Person";

const Persons = (props) => {

    const { persons, showAll, nameSearch } = props;

    const personsToShow = showAll ? persons : persons.filter(person => person.name.toLowerCase().includes(nameSearch.toLowerCase()));

    return (
        <div>
            {personsToShow.map(person => <Person key={person.name} name={person.name} number={person.number} />)}
        </div>
    )
}

export default Persons;