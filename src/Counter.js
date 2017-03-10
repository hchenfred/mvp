import React from 'react';
import $ from 'jquery';
 

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {

    $.ajax({
      url: 'https://jobs.github.com/positions.json?description=python&location=new+york', 
      dataType: 'jsonp',
      success: function(data) {
        this.setState({ items: data })
      }.bind(this),
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>something something!!!!!!adfafssfgood stuff</div>);
  }
}
export default Counter;