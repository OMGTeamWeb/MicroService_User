var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require("mongoose");
var server = require('../server/server');
var User = require('../server/api/user/userModel');

var should = chai.should();
chai.use(chaiHttp);

it('should add a new USER on /api/user POST', function(done) {
  chai.request(server)
    .post('/api/user/create')
    .send({
            "name": "hola",
            "email": "hola@hola"})
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.should.have.property('token');

      done();
    });
});

afterEach(function(done){
   User.collection.drop();
   done();
});
