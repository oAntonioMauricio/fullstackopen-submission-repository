const Person = (props) => {

    const { name, number, handlePersonDelete } = props;

    return (
        <>
            <p>{name} - {number} <button onClick={handlePersonDelete}>Delete</button></p>
        </>
    )
}

export default Person;