{
    type genericType<T> = Array<T>
    type genericTupeType<x,y,z> = [x,y,z]

const names:genericType<string> = ['jaber','hasan'];

const numbers :genericType<number> = [1,2,3,4,5];
const isTrue:genericType<boolean> = [true,false]
const users:genericType<{name:string,roll:number,age:number}> = [
    {
        name:'jaber',
        roll:34,
        age:28
    },
    {
        name:'Atik',
        roll:2,
        age:21
    },
    {
        name:'mehrav',
        roll:24,
        age:28
    }
  

]
const countries:genericTupeType<number,{name:string,roll:number},{name:string,roll:number}> = [123,{
    name:'jaber hasan',
    roll:101
},
{
    name:'atik',
    roll:1
},
]
}