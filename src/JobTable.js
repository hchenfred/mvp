import React from 'react';
import Job from './Job.js';

const JobTable = (props) => (
  <div>
    <ul>
      {props.jobs.map((job) => <Job key={job.id} job={job}/>)}
    </ul> 
  </div>
)

export default JobTable;