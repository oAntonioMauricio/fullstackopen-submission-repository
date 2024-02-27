const Filter = (props) => {

    const { nameSearch, handleNameSearch } = props;

    return (
        <div>
            Filter shown with <input type="text" value={nameSearch} onChange={handleNameSearch} />
        </div>
    )
}

export default Filter;