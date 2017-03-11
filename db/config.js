var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected to MongoDB database');
});

var appliedJobSchema = mongoose.Schema({
    title: String,
    location: String,
    type: String,
    company: String,
    created_at: { type : Date, default: Date.now }
});

exports.AppliedJob = mongoose.model('AppliedJob', appliedJobSchema);
exports.createJobRecord = function(data) {
  var job = new exports.AppliedJob({title: data.title, location: data.location, type: data.type, company: data.company, created_at: data.created_at});
  job.save().then((job) => console.log('a new position is saved to appliedjobs table'));
}
// var job1 = new exports.AppliedJob({ title: 'full stack engineer' });


// job1.save().then(function(job) {
//   console.log('a job is save to table in MongoDB', job.title);
// });

//exports = db;
