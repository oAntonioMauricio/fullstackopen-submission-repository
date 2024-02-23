import Part from "./Part"

const Content = (props) => {

    let arrayOfParts = props.arrayOfParts;

    return (
        <>
            <Part part={arrayOfParts[0].part} exercises={arrayOfParts[0].exercises} />
            <Part part={arrayOfParts[1].part} exercises={arrayOfParts[1].exercises} />
            <Part part={arrayOfParts[2].part} exercises={arrayOfParts[2].exercises} />
        </>
    )
}

export default Content