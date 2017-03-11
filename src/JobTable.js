import React from 'react';
import Job from './Job.js';

const JobTable = (props) => (
  <div>
    <ul>
      {props.jobs.map((job) => <Job key={job.id} job={job} handleAppliedJob={props.handleAppliedJob} handleFavorite={props.handleFavorite}/>)}
    </ul> 
  </div>
)

export default JobTable;