//assert library
const assert = require('chai').assert;

const script = require('../script');



describe('script', function (){
    it('should return results', function(){
        assert.equal(script.getResults(), "results");
    });

    it('sayHello shold return type string', function(){
        let result=app.sayHello();
        assert.typeOf(result, 'string');
    }); 

    it('addNumbers return value > 5', function(){
        let result = app.addnumbers(5,5);
        assert.isAbove(result, 5);
    });

    it('addNumbers return type numer', function(){
        let result = app.addnumbers(5,5);
        assert.typeOf(result, 'number');
    });
});