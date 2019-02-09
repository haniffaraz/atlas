import React from 'react';

const HeaderBody = ({ data }) => (
      <div className="headerBody">
        <h3><b>{data.default.communities.length}</b></h3>
        <h5><b>Communities</b> in <b>{data.default.name}</b></h5>
      </div>
)
 
export default HeaderBody;
