import Part from "./Part"

const Content = (props) => {

    let arrayOfParts = props.parts;

    return (
        <>
            <Part part={arrayOfParts[0].name} exercises={arrayOfParts[0].exercises} />
            <Part part={arrayOfParts[1].name} exercises={arrayOfParts[1].exercises} />
            <Part part={arrayOfParts[2].name} exercises={arrayOfParts[2].exercises} />
        </>
    )
}

export default Content