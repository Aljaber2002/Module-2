const nameArray =<T> (value:T):T[]=>{
    return [value]
}
console.log(nameArray<{name:string}>({name:'jaber'}))
const tupleArray = <T,Q>(value1:T,value2:Q):[T,Q]=>{
    return [value1,value2]
}
console.log(tupleArray<number,{name:string}>(12,{name:'jaber'}))
const newStudent =<T> (value:T)  =>{
    const cource = "programming hero"
    return {
        ...value,
        cource
    }
}
console.log(newStudent<{name:string;age:number}>({name:'jaber hasan',age:23}))