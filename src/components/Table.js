import React, { Component } from 'react';
import { Collapse, Button } from 'reactstrap';
import TableBody from './TableBody';

class Table extends Component {
  state = { 
    collapse: false
  } 

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
        <table>
          <thead>
            <tr>
              <th>NAME<Button className="btn" onClick={this.toggle}>+</Button></th>
              <th>NUMBER OF CASES<Button className="btn" onClick={this.toggle}>+</Button></th>
            </tr>
          </thead>
          <tbody>
              <Collapse isOpen={this.state.collapse}>
              <TableBody communities={this.props.communities}/>
              </Collapse >
          </tbody>
        </table>
    )
  }
}

export default Table;