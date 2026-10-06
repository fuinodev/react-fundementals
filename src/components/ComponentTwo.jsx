const ComponentTwo = ({ onClickHandler }) => {
  const handleClick = () => onClickHandler();

  return (
    <div>
      <button onClick={handleClick}>Decrement</button>
    </div>
  );
};

export default ComponentTwo;