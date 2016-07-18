const request = require('supertest');
const app = require('../app').getApp;

describe( 'GET / ', function() {
    it('expects HTTP returns 200', function(result) {
        request(app)
            .get('/')
            .expect(200, result)
    });
});