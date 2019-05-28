import React from 'react';
import './App.css';
import Lockers from './components/Lockers';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <h1><p>Locker</p></h1>
        <Lockers />
      </div>
    );
  }
}

export default App;
