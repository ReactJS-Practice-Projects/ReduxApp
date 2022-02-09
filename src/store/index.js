import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

//now we point our store to the reducer function. We create redux store. 
//we do it so that components of our App can dispatch and listern actions 
const store = createStore(counterReducer);

export default store;