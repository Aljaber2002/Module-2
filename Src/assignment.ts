{
    // problem:1
    const checkingStringAndNum = (value:string|number):number=>{
        if(typeof value === 'string'){
           
            return value.length
        }
        else{
            return value*value
        }
    }
    console.log(checkingStringAndNum(10))
    // problem-2
    
}