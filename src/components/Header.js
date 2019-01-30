import React, { Component } from 'react';
import Table from './Table';
import HeaderBody from './HeaderBody';
import { Collapse, Button } from 'reactstrap';

class Header extends Component {
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
      <div className="header">
        <div className="title">
          <h2>LIST OF COMMUNITIES<Button className="btn" onClick={this.toggle}>+</Button></h2>
          <Collapse isOpen={this.state.collapse}>
          <HeaderBody data={this.props.data}/>
          <Table communities={this.props.data.default.communities}/>
          </Collapse>
        </div>
      </div>
    )
  }
}

export default Header;