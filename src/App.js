import React from 'react';
import $ from 'jquery';
import JobTable from './JobTable.js';
import Form from './Form.js';
import postJobAsync from './utility.js';
 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.favoriates = [];
    this.appliedJobs = [];
    this.state = { 
      jobs: [],
      location: '',
      position: 'front end'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleAppliedJob = this.handleAppliedJob.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit');
    $.ajax({
      url: 'https://jobs.github.com/positions.json?description=' + this.state.position + '&location=' + this.state.location, 
      dataType: 'jsonp',
      success: function(data) {
        console.log('enter here');
        this.setState({ jobs: data })
        console.log(data);
      }.bind(this),
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  handleLocationChange(text) {
    event.preventDefault();
    console.log('handle Location Change', text);
    this.setState({location: text});
  }

  handlePositionChange(text) {
    event.preventDefault();
    console.log('handle Position Change', text);
    this.setState({position: text});
  }

  handleFavorite(job) {
    console.log('handle adding to favoriate list', job);
  }

  handleAppliedJob(job) {
    console.log('handle adding to applied job list', job);
    console.log(job);
    postJobAsync('/jobs', job);
  }


  componentDidMount() {
    $.ajax({
      url: 'https://jobs.github.com/positions.json?description=python&location=san+francisco', 
      dataType: 'jsonp',
      success: function(data) {
        this.setState({ jobs: data })
      }.bind(this),
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (
      <div>good stuff
        <Form handleSubmit={this.handleSubmit} handleLocationChange={this.handleLocationChange} handlePositionChange={this.handlePositionChange}/>
        <JobTable jobs={this.state.jobs} handleAppliedJob={this.handleAppliedJob} handleFavorite={this.handleFavorite}/>
      </div>);
  }
}
export default App;