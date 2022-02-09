const redux = require('redux');

//in order to install redux we run the following commands: 
//1. npm init -y
//2. npm install redux

//here we initialize state when the component is loaded for teh first time to prevent error
const counterReducer = (state = { counter: 0}, action) => {
  if(action.type === 'increment')
  {
    return {
      counter: state.counter + 1,
    };
  }

  if(action.type === 'decrement')
  {
    return {
      counter: state.counter - 1,
    };
  }
};

const store = redux.createStore(counterReducer);

console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

//here we dispatch action that runs reducer  
store.dispatch({type: 'increment' });
store.dispatch({type: 'decrement' });
