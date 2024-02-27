import Part from "./Part";

const Content = (props) => {

    const { parts } = props;

    // calc total exs
    let totalExs = parts.reduce((acc, obj) => acc + obj.exercises, 0);

    return (
        <>
            {parts.map((part) =>
                <Part key={part.id} part={part} />
            )}
            <p>Total of {totalExs} exercises.</p>
        </>
    )
}

export default Content;