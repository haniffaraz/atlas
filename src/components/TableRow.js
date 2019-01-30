import React, { Component } from 'react'

class TableRow extends Component {
  render() {
    return (
        <div className="Row">
            <div className="Cell">
                <p>{this.props.community.name}</p>
            </div>
            <div className="Cell">
                <p>{this.props.community.cases}</p>
            </div>
        </div>
    )
  }
}

export default TableRow;
