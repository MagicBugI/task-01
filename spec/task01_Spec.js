describe('getLength function' , ()=>{
    
    const getLength = require('../modules/task_01');

    it('should be able to calculate correct length' , ()=>{
        expect(getLength(12345)).toEqual(5);
    })
    it('should be able to convert params to Number' , ()=>{
        expect(getLength('5555')).toEqual(4);
    })
    it('should be able to return null when incorrect param' , ()=>{
        expect(getLength('asddas')).toBeNull();
    })
    it('should be able to return null when zero param' , ()=>{
        expect(getLength('asddas')).toBeNull();
    })
})