import React from 'react';
import Job from './Job.js';

const JobTable = (props) => (
  <div>
    <h4> This is my job table </h4>
    <ul>
      {props.jobs.map((job) => <Job job = {job}/>)}
    </ul> 
  </div>
)

export default JobTable;