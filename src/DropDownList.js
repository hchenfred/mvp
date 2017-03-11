import React from 'react';

const DropDownList = (props) => (
  <div>
   <select defaultValue='please select' onChange={props.handleSelectedFilter}>
      <option value='All positions'>All positions</option>
      <option value="Applied Jobs">Applied Jobs</option>
      <option value="Interested Jobs">Interested Jobs</option>
    </select>
  </div>    
)

export default DropDownList;