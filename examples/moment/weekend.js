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
    now.locale('pl');
    var isWeekend = function () {
        // Check if Staruday or Sunday
        return now.weekday() == 5 || now.weekday() == 6
    }
    var nextWeekend = function () {
        // Calculate time till next weekend
        return isWeekend() ? now.clone().add(1, 'weeks').weekday(5) : now.clone().weekday(5);
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
