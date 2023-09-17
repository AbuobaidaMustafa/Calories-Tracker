function ClickCounter(props) {
  const { setClickCounter } = props;

  const onClickHandler = () => {
    setClickCounter((perviousValue) => perviousValue + 1);

    console.log("Clicked");
  };

  return (
    <button type="button" onClick={onClickHandler}>
      Click Me
    </button>
  );
}

export default ClickCounter;
