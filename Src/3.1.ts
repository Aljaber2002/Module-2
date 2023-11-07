{
    class person {
        name:string;
        age:number;
        color:string;
        constructor( name:string, age:number, color:string){
            this.name = name;
            this.age = age;
            this.color = color;
          
    
    
        }
        
    }
    class student extends person{
        
       constructor(name:string, age:number, color:string){
        super(name,age,color)

       }
       getAge (){
        return `${this.name} is ${this.age} years old`
       }

       
    }
    // const dog =new person('babu',23,'red')
    // console.log(dog.name)
    const jaberDetails = new student('jaber',27,'red')
    const jabFUnc = jaberDetails.getAge()
    console.log(jaberDetails,jabFUnc)

}
