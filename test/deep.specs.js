const assert = require('assert');
const doterize = require('../lib/app');

obj1 = {
    agents: [],
    statistics: {
        by: {
            status: '',
            calls: {
                accepted: 0,
                rejected: 0
            }
        }
    },
    alerts: []  
}

obj2 = {
    user: {
        address: {
            direction: 'calle nueva',
            number: 2
        },
        name: 'username',
        age: 35,
    }
}

describe('deep keys function test', function () {
    before(function () {
        // No needs implementation
    });
    afterEach(function () {
        // No needs implementation
    });
    it('TEST 1 - Object: ' + JSON.stringify(obj1), function(done) {
        let expected = [
            'agents',
            'statistics.by.status',
            'statistics.by.calls.accepted',
            'statistics.by.calls.rejected',
            'alerts'
        ]
        let keys = doterize(obj1).keys;
        assert.equal(JSON.stringify(expected), JSON.stringify(keys));
        done();
    });

    it('TEST 2 - Object: ' + JSON.stringify(obj2), function(done) {
        let expected = [
            'user.address.direction',
            'user.address.number',
            'user.name',
            'user.age'
        ]
        let keys = doterize(obj2).keys;
        assert.equal(JSON.stringify(expected), JSON.stringify(keys));
        done();
    });
  });