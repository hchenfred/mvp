import React from 'react';
import $ from 'jquery';
import JobTable from './JobTable.js';
 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      jobs: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    alert('A name was submitted ');
    event.preventDefault();
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
    return (

      <div>good stuff
        <JobTable jobs = {this.state.jobs}/>
      </div>);
  }
}
export default App;