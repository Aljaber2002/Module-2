{
    interface user<T> {
        name:string;
        address:{
            country:string;
            city:string;
            village:string
        }
        isWatch ?: T
    }
    interface poorDevwatch {brand:string,model:string}
    
    
    const poorDeveloper:user<poorDevwatch> = {
        name:'jaber hasan',
        address:{
            country:'bangladesh',
            city:'Dhaka',
            village:'Ashkona'
        },
        isWatch:{
            brand:'casio',
            model:"backdated"
        }
    }
    console.log(poorDeveloper)
    const richDev : user<null>= {
        name:'atikur rahman',
        address:{
            country:'bangladesh',
            city:'Dhaka',
            village:'Ashkona'
        }
        
    }
}