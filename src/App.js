import React from 'react';
import './App.css';
import Header from './components/Header';
import * as Data from './data.json'

class App extends React.Component {

  state = {
    data: Data
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.data}/>
      </div>
    );
  }
}

export default App;
