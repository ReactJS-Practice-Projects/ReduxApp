import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

//we pass object to the createSlice with predefined parameters 
//name - name of the slice, initialState, reducers
//with this toolkit we can manipulate states directly
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    //here we use reserved word payload to get access to input parameter
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});


//configureStore is the tool that allows to pass multiple reducers to this function
//bigger application can have many reducers and as result of it we use configureStore tool 
//configureStore takes object as an input parameter. 
//If we want to pass multiple reducers then we pass map of reducers and variables. 
//configureStore with multiple reducers will look like this
/*
const store = configureStore({
  reducer: { counter: counterSlice.reducer } 
});
*/

const store = configureStore({
  reducer: counterSlice.reducer
});

//here we also need to export counter actions in order to use them in other components
export const counterActions = counterSlice.actions;

export default store;
