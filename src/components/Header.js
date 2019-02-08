import React from 'react';
import Table from './Table';
import HeaderBody from './HeaderBody';

const Header = ({ data }) => (
      <div className="header">
        <div className="title">
          <h6 className="list">LIST OF COMMUNITIES</h6>
          <HeaderBody data={data}/>
          <Table communities={data.default.communities}/>
        </div>
      </div>
    )

export default Header;