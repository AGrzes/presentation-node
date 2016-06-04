var moment = require('moment');

// Creating / Parsing
var now = moment(); // Curren date time
var presentationDate = moment("2016-06-08"); // Planned presentation date
var newYearFormat = moment("20170101","YYYYMMDD");

// Formattring
console.log("ISO 8601");
console.log(now.format());// ISO 8601
console.log("YYYY-MM-DD");
console.log(newYearFormat.format('YYYY-MM-DD'));// YYYY-MM-DD
console.log("Local month name, day of month, year");
console.log(presentationDate.locale("pl").format('LL'));// Local month name, day of month, year
console.log("ISO8601 in UTC");
console.log(now.toJSON()); // ISO8601 in UTC

// And Manipulation
console.log("Time to end of year");
console.log(now.to(now.clone().endOf('year')));// Time to end of year
console.log("Next wednsday");
console.log(now.clone().endOf('week').add(1, 'w').day(3).calendar(now));// Next wednsday

// Durations

var threeDays=moment.duration(3,'days');
var anotherThreeDays = moment.duration('P3D'); // ISO 8601
var fromMoments = moment.duration(now.diff(now.clone().add(3, 'd')));

console.log("Three days");
console.log(threeDays.humanize());
console.log("From ISO");
console.log(anotherThreeDays.humanize());
console.log("From moment");
console.log(fromMoments.humanize());
console.log("With polish locale");
console.log(threeDays.locale("pl").humanize());//
console.log("ISO 8601");
console.log(anotherThreeDays.toJSON()); // ISO 8601
// Add to moment
console.log("Date in three days");
console.log(now.add(threeDays).format());
