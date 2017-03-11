import React from 'react';

const Job = (props) => (
  <div>
    <h4>{props.job.company}</h4>
    <p>{props.job.title}</p>
    <a href={props.job.url}>apply from here</a>
    <button onClick={() => props.handleAppliedJob(props.job)}>Add to applied</button>
    <button onClick={() => props.handleFavorite(props.job)}>Add to favoriate</button>
    <hr />
  </div>
);

export default Job;