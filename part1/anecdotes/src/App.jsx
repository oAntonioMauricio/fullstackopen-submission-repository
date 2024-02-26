import { useState } from 'react';
import MostVotes from './components/MostVotes';

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);
  const [scores, setScores] = useState(Array(anecdotes.length).fill(0));
  const [mostVotes, setMostVotes] = useState(0);

  const getRandomAnecNumber = () => {
    let max = anecdotes.length;
    let random = Math.random() * max | 0;

    // keep going if it's the same anecdote
    while (random === selected) {
      random = Math.random() * max | 0;
    }

    setSelected(random);
  }

  const vote = () => {
    let scoresCopy = [...scores];
    scoresCopy[selected] += 1;

    setScores(scoresCopy);

    // check high score
    if (scoresCopy[selected] >= scoresCopy[mostVotes]) {
      setMostVotes(selected);
    }
  }

  return (
    <div>

      <h1>Anecdote of the Day</h1>
      {anecdotes[selected]}
      <p>has {scores[selected]} votes</p>

      <div>
        <button onClick={() => vote()}>Vote</button>
        <button onClick={() => getRandomAnecNumber()}>Next Anecdote</button>
      </div>

      <MostVotes anecdotes={anecdotes} mostVotes={mostVotes} scores={scores} />

    </div>
  )
}

export default App