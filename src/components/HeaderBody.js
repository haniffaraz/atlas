import React, { Component } from 'react';

class HeaderBody extends Component {
  render() {
    return (
      <div className="headerBody">
        <h3><b>{this.props.data.default.communities.length}</b></h3>
        <h5><b>Communities</b> in <b>{this.props.data.default.name}</b></h5>
      </div>
    )
  }
}

export default HeaderBody;
