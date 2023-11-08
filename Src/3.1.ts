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


// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Porgramming-Hero-web-course/l2b2a1-explore-basic-typescript-simple-assignment-Aljaber2002.git
// git push -u origin main
