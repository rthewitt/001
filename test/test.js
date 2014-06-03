var assert = require('assert');
var userSol = require('../userSol');

describe('Challenge #1', function() {

    describe('Default Return value', function() {
        it('should be do me solid', function() {
            assert.equal('done solid', userSol.doMeSolid());
        });
    });

    describe('Return value', function() {
        it('should contain argument name', function() {
            assert.equal('bob done solid', userSol.doMeSolid('bob'));
        });
    });

    describe('test configuration', function() {
        it('config has property something=whatever', function() {
            assert.strictEqual('whatever', userSol.something);
        });
    });
});
