import React from 'react';

const Form = (props) => (
  <form className="col-md-6 col-md-offset-3" onSubmit={props.handleSubmit}>
    <div>
      <label className="form-group">Location:</label>
      <input type="text" className="form-control" onChange={(e) => props.handleLocationChange(e.target.value)}/>
    </div>
    <div>
      <label className="form-group">Enter Keywords:</label>
      <input type="text" className="form-control" onChange={(e) => props.handlePositionChange(e.target.value)}/>
    </div>
    <input type="button" className="btn btn-primary btn-sm btn-space" type="submit" value="Submit" />
  </form>
)

export default Form;