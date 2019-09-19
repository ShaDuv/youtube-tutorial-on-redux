import React from 'react';
import {useSelector} from 'react-redux';
import {increment} from './actions';
import {decrement} from './actions';
import {useDispatch} from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <h1>Counter {counter}</h1>
      <button onClick = {() => dispatch(increment())}>+</button>
      <button onClick = {() => dispatch(decrement())}>-</button>

    {isLogged ? <h3>Garbage text</h3> : ''}

    </div>
  );
}

export default App;
