// const FeedbackMap = [
//   { button: 'good' },
//   { button: 'neutral' },
//   { button: 'bad' },
// ];

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      name={option}
      type="button"
      onClick={() => onLeaveFeedback(option)}
      key={option}
    >
      {option}
    </button>
  ));
};
