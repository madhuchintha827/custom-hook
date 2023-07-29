import React from 'react'
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';

function App() {
  return (
    <React.Fragment>
      <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
        <a href="/" className='navbar-brand'>Custom Hook</a>
      </nav>
      <CounterOne/>
      <CounterTwo/>
    </React.Fragment>
  );
}

export default App;
