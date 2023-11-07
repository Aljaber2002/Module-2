{
    type user = {
        name:string;
        age:number;
        versity:string
    }
    interface user1 {
        name:string;
        age:number;
        versity:string;
        role?:string
    }
    const myself:user1 = {
        name:'jaber',
        age:23,
        versity:'Dhaka versity',
        role:'admin'
        
        
    }
    // console.log(myself)
    // we can use interface type in non-primitive type method.
    type name = string
    const anuth:name = 'jaber hasan'
    type atik = {
        name:string;
        age:number
    }
    type atik1 = {
        college:string;
        hobby:string;
        role:string
    }
    // type totalAtik = atik & atik1
    interface totalAtik extends atik {
        college:string;
        hobby:string;
        role:string
    }
    const atikself:totalAtik = {
        name:'Atikur Rahman',
        age:22,
        college:'Dhaka college',
        hobby:'playing cricket',
        role:"admin",
       
    }
    // console.log(atikself)
    // type specialnum = number[]
    interface specialnum {
        [index:number]:number
    }
    const numbers:specialnum = [1,2,3,4,5,];
    // interface adjustValue  {
    //      (value1:number,vaue2:number):number

    // }
    type adjustValue = (num1:number,num2:number)=>number
    const add:adjustValue = (value1,value2) => value1+value2
    console.log(add(1,4))
    
}