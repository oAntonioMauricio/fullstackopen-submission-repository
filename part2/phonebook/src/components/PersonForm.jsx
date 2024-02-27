const PersonForm = (props) => {

    const { newName, newNumber, handleNewChange, handleNumberChange, onNameSubmit } = props;

    return (
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
    )
}

export default PersonForm;