import { useSelector, useDispatch, connect } from 'react-redux';

import classes from './Counter.module.css';

/*
const Counter = () => {
   //add useDispatch hook to dispatch redux actions
  const dispatch = useDispatch();
  
  //useSelector is redux hook we use to  get redux data
  //we pass redux function to it to get counter from the state
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
*/


import { Component } from 'react';

class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  //this.incrementHandler.bind(this) - we do bind(this) to make sure that these menthods reffer to this class 
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

//here we pick counter form the state and bound it to the counter variable 
//it is equivalent to the hook in the functional component 
//const counter = useSelector(state => state.counter); 
//here the state is the argument in the function
const mapStateToProps = state => {
  return {
    counter: state.counter
  };
}

//this is equivalent to the functional dispatch function
//const dispatch = useDispatch();
//here the dispatch is the argument in the function 
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
  }
};

//here we pass our class counter, and two other parametsr are the state and actions
//mapStateToProps, and mapDispatchToProps are pointers that are executed by redux
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
