const request = require('supertest');
const app = require('../app');

describe('Home page', () => {
    it('Loads with Welcome massage', (done) => {
        request(app).get('/').expect(200).expect(/Welcome to Asheori Reactive Technology/, done);
    });
    
});
