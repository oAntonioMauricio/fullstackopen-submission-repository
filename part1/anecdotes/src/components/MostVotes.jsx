const MostVotes = ({ anecdotes, scores, mostVotes }) => {

    if (Math.max(...scores) === 0) {
        return (
            <>
                <h1>Anecdote with The Most Votes</h1>
                <p>No votes yet.</p>
            </>
        )
    }

    return (
        <>
            <h1>Anecdote with The Most Votes</h1>
            {anecdotes[mostVotes]}
            <p>has {scores[mostVotes]} votes!</p>
        </>
    )

}

export default MostVotes;