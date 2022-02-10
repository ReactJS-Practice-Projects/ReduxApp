import { useSelector } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  //useSelector is redux hook we use to  get redux data
  //we pass redux function to it to get counter from the state
  const counter = useSelector(state => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
