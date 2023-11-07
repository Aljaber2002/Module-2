"use strict";
{
    // const school:string = 'Dhaka college'
    // console.log(school)
    // const myself:string = 'jaber hasan'
    // console.log(myself)
    let myself;
    myself = 'Jaber hasan';
    const index = myself.length;
    // console.log(index)
    function kgTogm(value) {
        if (typeof value === 'number') {
            const convertedValue = value * 1000;
            return convertedValue;
        }
        else if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `the value is: ${convertedValue}`;
        }
        else {
            return `Invalid value`;
        }
    }
    kgTogm(10);
}
