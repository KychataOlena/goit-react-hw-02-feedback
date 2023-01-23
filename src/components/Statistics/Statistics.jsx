export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li>Good: {good} </li>
      <li>Neutral: {neutral} </li>
      <li>Bad: {bad} </li>
      <li>total: {total} </li>
      <li>positivePercentage: {positivePercentage} % </li>
    </ul>
  );
};
