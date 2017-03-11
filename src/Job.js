import React from 'react';

const Job = (props) => (
  <div>
    <h4>{props.job.company}</h4>
    <p>{props.job.title}</p>
    <a href={props.job.url}>apply from here</a>
    <hr />
  </div>
);

export default Job;