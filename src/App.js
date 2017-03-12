import React from 'react';
import $ from 'jquery';
import JobTable from './JobTable.js';
import Form from './Form.js';
import DropDownList from './DropDownList.js'
import postJobAsync from './utility.js';
 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.appliedJobs = [];
    this.state = { 
      jobs: [],
      location: '',
      position: 'front end',
      selectedFilter: 'all'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleAppliedJob = this.handleAppliedJob.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleSelectedFilter = this.handleSelectedFilter.bind(this);
  }

  handleSelectedFilter(event) {
    console.log('Handle dropdownlist selection', event.target.value);
    var selectedValue = event.target.value;
    if (selectedValue === 'Applied Jobs') {
      this.appliedJobs = [];
      fetch('/jobs')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        responseJson.forEach((item) => this.appliedJobs.push(item));
        console.log('==========', this.appliedJobs);
        this.setState({selectedFilter: 'applied'});
      })
      .catch((error) => {
        console.error(error);
      });
    } else if (selectedValue === 'Interested Jobs') {
      this.setState({selectedFilter: 'Interested'});
    } else {
      this.setState({selectedFilter: 'all'});
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit');
    $.ajax({
      url: 'https://jobs.github.com/positions.json?description=' + this.state.position + '&location=' + this.state.location, 
      dataType: 'jsonp',
      success: function(data) {
        this.setState({ jobs: data })
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
    postJobAsync('/jobs', job);
  }


  componentDidMount() {
    $.ajax({
      url: 'https://jobs.github.com/positions.json?description=python&location=new+york', 
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
    var jobTable =  this.state.selectedFilter === 'applied' ? (<JobTable jobs={this.appliedJobs} handleAppliedJob={this.handleAppliedJob} handleFavorite={this.handleFavorite}/>) : (<JobTable jobs={this.state.jobs} handleAppliedJob={this.handleAppliedJob} handleFavorite={this.handleFavorite}/>)


    return (
      <div className='container'>
        <h1></h1>
        <div className='row'>
          <Form handleSubmit={this.handleSubmit} handleLocationChange={this.handleLocationChange} handlePositionChange={this.handlePositionChange}/>
        </div>
        <div className='row col-md-6 col-md-offset-3'>
          <DropDownList handleSelectedFilter={this.handleSelectedFilter}/>
        </div>
        <div className='row'>
          {jobTable}
        </div>
      </div>);
  }
}
export default App;