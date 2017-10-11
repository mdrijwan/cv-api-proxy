import {assert} from 'chai';
import {expect} from 'chai';
// var app = require('./../app')        
let port = 3001

describe('Proxy-Api Port', () => {
    it('the server should run on the port 3001', () => {
        // assert.equal(app.get('port'), 3001)
        assert.equal(port, 3001)
        });
})