import React, { Component } from 'react';
import _ from 'lodash';

class TableBody extends Component {
  render() {
      let { communities } = this.props;
      const data = [...communities];
      const sortedData = _.sortBy(data, o => o.name);
      const tableBody = sortedData.map((community,i) => {
          return (
                <tr key={i}>
                    <td className="Cell">{community.name}</td>
                    <td className="Cell">{community.cases}</td>
                </tr>
          )});
    return (
            tableBody
        )
     }
}

export default TableBody;
