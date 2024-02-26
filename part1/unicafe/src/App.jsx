import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, number, isPercent }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{isNaN(number) ? "Need more feedback." : isPercent ? number + "%" : number}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad;

  if (total === 0) {
    return <>No feedback given.</>;
  }

  return (
    <>
      <table>
        <tbody>
          <StatisticLine text={"Good"} number={good} />
          <StatisticLine text={"Neutral"} number={neutral} />
          <StatisticLine text={"Bad"} number={bad} />
          <StatisticLine text={"Total"} number={total} />
          <StatisticLine text={"Average"} number={(1 * good + 0 * neutral + -1 * bad) / total} />
          <StatisticLine text={"Positive"} number={(good * 100) / total} isPercent={true} />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // modifiy feedback
  const addFeedback = (oldValue, type) => {
    const updatedValue = oldValue + 1;

    if (type === "good") {
      setGood(updatedValue);
    }

    if (type === "neutral") {
      setNeutral(updatedValue);
    }

    if (type === "bad") {
      setBad(updatedValue);
    }
  };

  return (
    <div>

      <h1>Give Feedback</h1>
      <Button
        text={"Good"}
        onClick={() => addFeedback(good, "good")} />
      <Button
        text={"Neutral"}
        onClick={() => addFeedback(neutral, "neutral")}
      />
      <Button
        text={"Bad"}
        onClick={() => addFeedback(bad, "bad")} />

      <h1>Statistics</h1>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
