import React from 'react';

const DropDownList = (props) => (
  <select defaultValue='please select' onChange={props.handleSelectedFilter}>
    <option value='All positions'>All positions</option>
    <option value="Applied Jobs">Applied Jobs</option>
    <option value="Interested Jobs">Interested Jobs</option>
  </select>
)

export default DropDownList;