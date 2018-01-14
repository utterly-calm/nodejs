const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('number');
});

it('should aync add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should square the number', () => {
    var res = utils.square(4);
    expect(res).toBe(16).toBeA('number');
});

it('should set firstname and lastname', () => {
    var res = utils.setName({}, 'Vipul Sharma');
    expect(res).toInclude({
        firstName: 'Vipul',
        lastName: 'Sharma'
    });
});