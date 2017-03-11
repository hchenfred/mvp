var postJobAsync = function(url, data) {
  //console.log('good data is here=====', JSON.stringify(data));
  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
};

export default postJobAsync;