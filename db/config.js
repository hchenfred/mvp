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
    company_logo: String,
    created_at: { type : Date, default: Date.now }
});

var interestedJobSchema = mongoose.Schema({
    title: String,
    location: String,
    type: String,
    company: String,
    company_logo: String,
    created_at: { type : Date, default: Date.now }
});

exports.AppliedJob = mongoose.model('AppliedJob', appliedJobSchema);
exports.InterestedJob = mongoose.model('InterestedJob', interestedJobSchema);
exports.createJobRecord = function(data) {
  var job = new exports.AppliedJob({title: data.title, location: data.location, type: data.type, company: data.company, company_logo: data.company_logo, created_at: data.created_at});
  job.save().then((job) => console.log('a new position is saved to appliedjobs table'));
}