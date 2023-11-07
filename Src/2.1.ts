{
    // const school:string = 'Dhaka college'
// console.log(school)
// const myself:string = 'jaber hasan'
// console.log(myself)
let myself:any;
myself = 'Jaber hasan';
const index = (myself as string).length
// console.log(index)

function kgTogm (value:number | string):string | number |undefined {
    if(typeof value === 'number'){
        const convertedValue = value*1000
        return convertedValue
    }
    else if(typeof value === 'string'){
        const convertedValue = parseFloat(value)*1000
        return `the value is: ${convertedValue}`

    }
    else{
        return `Invalid value`
    }

    
}
kgTogm(10)



}