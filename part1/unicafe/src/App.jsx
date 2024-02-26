import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Statistic = ({ text, number }) => {
  return (
    <div>
      {text} {number}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // modifiy feedback
  const addFeedback = (oldValue, type) => {
    const updatedValue = oldValue + 1;

    if (type === 'good') {
      setGood(updatedValue)
    }

    if (type === 'neutral') {
      setNeutral(updatedValue)
    }

    if (type === 'bad') {
      setBad(updatedValue)
    }
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text={'Good'} onClick={() => addFeedback(good, 'good')} />
      <Button text={'Neutral'} onClick={() => addFeedback(neutral, 'neutral')} />
      <Button text={'Bad'} onClick={() => addFeedback(bad, 'bad')} />
      <h1>Statistics</h1>
      <Statistic text={'Good'} number={good} />
      <Statistic text={'Neutral'} number={neutral} />
      <Statistic text={'Bad'} number={bad} />
    </div>
  )
}

export default App