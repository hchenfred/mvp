import React from 'react';

const Job = (props) => (
  <div className="col-md-6 col-md-offset-3">
    <h4>{props.job.company}</h4>
    <div><img className='companyLogo' src={props.job.company_logo}/></div>
    <p>{props.job.title}</p>
    <a href={props.job.url}>apply from here</a>
    <div>
      <button className="btn btn-primary btn-sm btn-space" onClick={() => props.handleAppliedJob(props.job)}>Add to applied</button>      
      <button className="btn btn-primary btn-sm btn-space" onClick={() => props.handleFavorite(props.job)}>Add to favoriate</button>
    </div>
    <hr />
  </div>
);

export default Job;