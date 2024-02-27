import Part from "./Part";

const Content = (props) => {

    const { parts } = props;

    // calc total exs
    let totalExs = parts.reduce((acc, obj) => acc + obj.exercises, 0);

    return (
        <>
            {parts.map((part) => <Part key={part.id} part={part} />)}
            <h4>Total of {totalExs} exercises.</h4>
        </>
    )
}

export default Content;