describe('getAddSum function' , ()=>{
    
    const getAddSum = require('../src/modules/task_02');

    it('should be able to calculate correct sum' , ()=>{
        expect(getAddSum([5,5,5,5,5,5])).toEqual(30);
    })
    it('should be able to convert params to Number' , ()=>{
        expect(getAddSum(['5' , 5 , '5' , -5 , 100])).toEqual(15);
    })
})