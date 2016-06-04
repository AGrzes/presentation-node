var weekend = require('./weekend');

var nextWeekend = weekend(process.argv[2]);

if (nextWeekend.isWeekend()){
    console.log("Hooray it is weekend");
    console.log("Next weekened starting at "+nextWeekend.nextWeekend().locale('pl').format('L'));
} else {
    console.log("Not weekend");
    console.log("Next weekened starting at "+nextWeekend.nextWeekend().toISOString());
    console.log(nextWeekend.tillWeekend().humanize()+" till next weekend");
}
