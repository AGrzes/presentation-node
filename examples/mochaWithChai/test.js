var weekend = require('../moment/weekend');
var mocha = require('mocha');
var chai = require('chai');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

describe('weekend', function () {
    describe('#isWeekend()', function () {
        it('Should return false on Friday', function () {
            assert.isFalse(weekend('2016-01-01').isWeekend());
        });
        it('Should return true on saturday', function () {
            assert.isTrue(weekend('2016-01-02').isWeekend());
        });
        it('Should return true on Sunday', function () {
            assert.isTrue(weekend('2016-01-02').isWeekend());
        });
    });

    describe('#nextWeekend()', function () {
        it('Should tell that first weekend of 2016 start on 2016-01-02', function () {
            expect(weekend('2016-01-01').nextWeekend().format('YYYY-MM-DD')).to.be.equal('2016-01-02');
        });
    });

    describe('#tillWeekend()', function () {
        it('Should tell that first weekend of 2016 start in 1 day', function () {
            weekend('2016-01-01').tillWeekend().days().should.be.equal(1);
        });
    });
});
