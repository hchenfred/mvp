import React from 'react';

const Form = (props) => (
  <form onSubmit={props.handleSubmit}>
    <label>
      Enter location:
      <input type="text" onChange={(e) => props.handleLocationChange(e.target.value)}/>
    </label>
    <label>
      Description contains:
      <input type="text" onChange={(e) => props.handlePositionChange(e.target.value)}/>
    </label>
    <input type="submit" value="Submit" />
  </form>
)

export default Form;