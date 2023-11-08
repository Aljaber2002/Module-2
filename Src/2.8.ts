const numbers:number[] = [1,2,3,4,5]
const stringNumber:string[] = numbers.map(number=>number.toString())
console.log(stringNumber)
// type user ={
//     roll:number;
//     age:number;
// }
type stringUser<T>= {
    [key in keyof T ]:T[key]
}
const user1:stringUser<{roll:number;name:string}> ={
    roll:1,
    name:'jaber'
}
