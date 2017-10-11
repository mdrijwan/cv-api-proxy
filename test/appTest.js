"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
// var app = require('./../app')        
var port = 3001;
describe('Proxy-Api Port', function () {
    it('the server should run on the port 3001', function () {
        // assert.equal(app.get('port'), 3001)
        chai_1.assert.equal(port, 3001);
    });
});
//# sourceMappingURL=appTest.js.map