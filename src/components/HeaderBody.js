import React, { Component } from 'react';

class HeaderBody extends Component {
  render() {
    return (
      <div className="headerBody">
        <h1><b>{this.props.data.default.communities.length}</b></h1>
        <h3><b>Communities</b> in <b>{this.props.data.default.name}</b></h3>
      </div>
    )
  }
}

export default HeaderBody;
