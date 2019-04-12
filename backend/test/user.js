'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
chai.should();

describe('User test', function () {
  it('Health', (done) => {
    chai.request(app)
      .get('/api/v1/health')
      .end((err, res) => {
        if (err) console.log(err);

        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  it('Register 1', (done) => {
    chai.request(app)
      .post('/api/v1/validations/register1')
      .send({ email: 'assdas@gmail.com', password: '123asd12eas' })
      .end((err, res) => {
        if (err) console.log(err);

        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
