/**
 * Created by dipper on 2016/11/15.
 */
var path  = require('path');
var  request = require('supertest');
var app = require('../bin/www')
const accesstoken = 'c7d37d2a-a316-4c12-ba51-6ecef174f964';
describe('topics',function(){
    describe('GET /topics',function(){
        it('respond with json',function(done){

            request(app)
                .get('/topics')

                .expect(200,done)

        })
    })

    describe('Get /topic/:id',function(){
        it('respond with json',function(done){
            var id = '581026cceae2a24f34e67f0a';
            request(app)
                .get('/topic/'+id)
                .expect(200,done)

        })
    })
})

describe('user',function(){
    describe('POST /user/token',function(){
        it('respond with json',function(done){

            request(app)
                .post('/user/token')
                .send({accesstoken:accesstoken})
                .expect(function(res){
                    console.log(res.text);
                })
                .expect(200,done)
                
        })
    })


})

describe('message',function () {
    describe('get /message/messages',function(){
        it('respond with json',function(done){
            request(app)
                .get('/message/messages')
                .query({accesstoken:accesstoken})
                .expect(function(res){

                })
                .expect(200,done);
        })
    })

    describe('get /message/count',function(){
        it('respond with json',function(done){
            request(app)
                .get('/message/count')
                .query({accesstoken:accesstoken})
                .expect(200,done);
        })
    })
    
    describe('post /message/mark_all',function(){
        it('respond with json',function (done) {
            request(app)
                .post('/message/mark_all')
                .send({accesstoken:accesstoken})
                .expect(200,done);
        })
    })
})