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
    // console.log(checkingStringAndNum(10))
    // problem-2
    interface person{
        address?:{
            city:string;
            street:string

        };
        phone?:number
    } 
    const getAddressCity = (arguemnt:person):string | undefined=>{
        return arguemnt?.address?.city

    }
    const jaberAddress:person ={
        address:{
            city:"chitogong",
            street:'243 no house mogbazar Road'
        },
        phone:19462981
    }
    // console.log(getAddressCity(jaberAddress))
    // 
    // problem-3
    class Animal {
        name:string;
        color:string;
        price:number
        constructor(name:string,color:string,price:number){
            this.name = name;
            this.color = color;
            this.price = price

        }
    }
    class cat extends Animal {
        constructor(name:string,color:string,price:number){
            super(name,color,price)

        }
        getSound(){
            console.log('this cat sound like a tiger')
        }

    }
    class dog extends Animal {
        constructor(name:string,color:string,price:number){
            super(name,color,price)

        }
        getSound(){
            console.log('this dog sound like a tiger')
        }

    }
    const isCat = (animal:Animal) =>{
        
        if(animal instanceof cat){
            
            return `yes,it is cat`
        }
        else{
            return`No,its not a cat`
        }

    }
    const mycat = new cat('tom','white',2000)
    const myDog = new dog('alisa','black',10000)
    // console.log(isCat(myDog))
    // problem-4-------
    const mixData :[number,string,number,string,number] = [1,'two',3,"four",5]
    const addNumbersData = (arguements:[number,string,number,string,number])=>{
        const numbers    = arguements.filter((element :string|number)=>typeof element === 'number') as number[]
      if(numbers){
        // console.log(numbers)
        let initial = 0;
        numbers.forEach((element:number )=>{
            initial = initial+element

        })
        return initial
      }
      else{
        return 0
      }
    }
   console.log( addNumbersData(mixData))
//    problem -5
interface car {
    make:string;
    model:string;
    year:number
}
interface driver {
    name:string;
    licenceNumber :number;
}
function combinedObj (value1:car,value2:driver){
    return {
        ...value1,
        ... value2
    }
}
const car:car = {
    make:'London',
    model:"toyota",
    year:2014
}
const driver:driver = {
    name:'alif hasan',
    licenceNumber:123458

}
console.log(combinedObj(car,driver))
// problem-6-------------------------
const numbers = [1,2,3,4,5]
const sumOfArrayData = (param:unknown)=>{
    if(Array.isArray(param)){
        if(param.every(item=>typeof item === 'number')){
            let initial = 0
            param.forEach(item=>{
                initial = initial+item
            })
            console.log('sum is :',initial)
        }
        else{
            
            console.log(`Array contains non numeric number`)
        }

    }
    else{
        console.log('you have to put Array  input')
    }
}
sumOfArrayData(numbers)
// problem -7---------
// const values = [1,2,3,4,5]
// console.log(values.indexOf(10),'test')
// Example usage:

const values: number[] = [1, 2, 3, 4, 5, 55];

const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];

const targetNumber = 2;

const targetString = "cherry";
function findFirstOccurrence <T>(value1:T[],value2:T){
    const indexNumber = value1.indexOf(value2)
    return indexNumber

}

const indexInNumbers = findFirstOccurrence<number>(values,55);

const indexInStrings = findFirstOccurrence<string>(strings,'cherry');

console.log(indexInStrings); //output:  1

 


}