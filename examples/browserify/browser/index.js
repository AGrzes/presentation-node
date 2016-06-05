var weekend = require('../../moment');

var dateInput = document.getElementById('dateInput');
var check = document.getElementById('check');
var messageBox = document.getElementById('messageBox');
check.onclick = function(){
    var w = weekend(dateInput.value);
    if (w.isWeekend()){
        messageBox.innerHTML = '<h1>Hooray it is weekend</h1><p>Next weekened starting at '+w.nextWeekend().format('L')+'</p>';
    } else {
        messageBox.innerHTML = '<h1>Not weekend</h1><p>Next weekened starting at '+w.nextWeekend().format('L')+'</p><p>'+w.tillWeekend().humanize()+" till next weekend</p>";
    }
    return false;
};
