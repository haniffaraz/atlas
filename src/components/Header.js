import React, { Component } from 'react';
import Table from './Table';
import HeaderBody from './HeaderBody';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="title">
          <h6 className="list">LIST OF COMMUNITIES</h6>
          <HeaderBody data={this.props.data}/>
          <Table communities={this.props.data.default.communities}/>
        </div>
      </div>
    )
  }
}

export default Header;