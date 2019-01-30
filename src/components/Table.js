import React, { Component } from 'react';
import { Collapse, Button } from 'reactstrap';
import TableBody from './TableBody';

class Table extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className="Table">
        <div className="Heading">
            <div className="Cell">
                <p>NAME <Button className="btn" onClick={this.toggle}>+</Button></p>
            </div>
            <div className="Cell">
                <p>NUMBER OF CASES <Button className="btn" onClick={this.toggle}>+</Button></p>
            </div>
        </div>
        <Collapse isOpen={this.state.collapse}>
        <TableBody communities={this.props.communities}/>
        </Collapse >
      </div>
    )
  }
}

export default Table;