import React from 'react';
import './App.css';
import Header from './components/Header';
import * as Data from './components/data.json'

class App extends React.Component {

  state = {
    communities: Data
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.communities}/>
      </div>
    );
  }
}

export default App;
