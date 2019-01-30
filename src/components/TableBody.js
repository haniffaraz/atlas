import React, { Component } from 'react';
import TableRow from './TableRow';

class TableBody extends Component {
  render() {
      let { communities } = this.props;
      const tableBody = communities.map(community => {
          return <TableRow community={community} key={community.name}/>
        })
      
    return (
        <div className="tableBody">
            {tableBody}
        </div>
    )
  }
}

export default TableBody;
