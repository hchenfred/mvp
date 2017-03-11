import React from 'react';

const Form = (props) => (
  <form onSubmit={props.handleSubmit}>
    <div>
      <label>Location:</label>
      <input type="text" onChange={(e) => props.handleLocationChange(e.target.value)}/>
    </div>
    <div>
      <label>Enter Keywords:</label>
      <input type="text" onChange={(e) => props.handlePositionChange(e.target.value)}/>
    </div>
    <input type="submit" value="Submit" />
  </form>
)

export default Form;