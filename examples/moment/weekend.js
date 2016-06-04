var moment = require('moment');

var weekend = function (dateStr) {
    var now;
    if (dateStr) {
        // Parse Date
        now = moment(dateStr);
    } else {
        // Initialize with current time
        now = moment();
    }
    var isWeekend = function () {
        // Check if Staruday or Sunday
        return now.day() == 6 || now.day() == 7
    }
    var nextWeekend = function () {
        // Calculate time till next weekend
        return isWeekend() ? now.clone().add(1, 'weeks').set('day',6) : now.clone().day(6);
    }

    var tillWeekend = function () {
        // Calculate time till next weekend
        return moment.duration(now.diff(nextWeekend()));
    }

    return {
        isWeekend: isWeekend,
        nextWeekend: nextWeekend,
        tillWeekend: tillWeekend
    }
}

module.exports = weekend;
