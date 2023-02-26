
class uber{
        constructor(vehiclemodel,km)
            {
            this.km=km;
            this.vehiclemodel=vehiclemodel
            }
    }
     class uberprice extends uber{ 
        constructor(vehiclemodel,km){
            super(vehiclemodel,km)
      }
      pricedetail(){
             if (this.vehiclemodel==="Honda") 
             {
                if (this.km>=50){
                console.log(`vehicle model is ${this.vehiclemodel}`)
                console.log(`kilometer is ${this.km}km`)
                console.log(`price is ${(this.km*10)}$`)     
                } 
                    else{            
                        console.log(`vehicle model is ${this.vehiclemodel}`)
                        console.log(`kilometer is ${this.km}km`)
                        console.log(`price is ${(this.km*13)}$`)
                    }
             }   
        }
        pricedetail1(){
            if (this.vehiclemodel==="Swift") 
            {
                if (this.km>=50){
                console.log(`vehicle model is ${this.vehiclemodel}`)
                console.log(`kilometer is ${this.km}km`)
                console.log(`price is ${(this.km*8)}$`)     
                } 
                    else{            
                        console.log(`vehicle model is ${this.vehiclemodel}`)
                        console.log(`kilometer is ${this.km}km`)
                        console.log(`price is ${(this.km*10)}$`)
                    }
            }   
        }
        pricedetail2(){
            if (this.vehiclemodel==="Maruthi") 
            {
                if (this.km>=50){
                console.log(`vehicle model is ${this.vehiclemodel}`)
                console.log(`kilometer is ${this.km}km`)
                console.log(`price is ${(this.km*12)}$`)     
                } 
                    else{            
                        console.log(`vehicle model is ${this.vehiclemodel}`)
                        console.log(`kilometer is ${this.km}km`)
                        console.log(`price is ${(this.km*20)}$`)
                    }
            }   
        }
    }
 
let  result = new uberprice("Honda",40);
let  result1 = new uberprice("Swift",60);
let  result2 = new uberprice("Maruthi",30);
 result.pricedetail();
 result1.pricedetail1();
 result2.pricedetail2();



   