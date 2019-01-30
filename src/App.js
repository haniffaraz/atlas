import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import * as Data from './data.json'

class App extends React.Component {

  state = {
    data: Data
  }

  render() {
    return (
      <div className="App">
        <SideBar data={this.state.data}/>
      </div>
    );
  }
}

export default App;
