var _ = require('lodash');

var data = {
    array: [{
        values: [1, 3, 6]
    }, {
        values: 3,
        flags: {
            first: false,
            second: true
        }
    }, {
        values: [7, 4, 7],
        flags: {
            first: true,
            second: false
        }

    }]
};

_(data)
    .at('array')
    .flatMap()
    .tap(console.log)
    .reject(_.matchesProperty('flags.first', true))
    .tap(console.log)
    .flatMap(_.property('values'))
    .tap(console.log)
    .map(_.partial(_.add, _, 3))
    .tap(console.log)
    .value();
