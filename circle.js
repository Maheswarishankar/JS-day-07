
class circle{
    constructor(radius,color){
        this .radius = radius;
        this.color = color;
    }
    //Just calculate circle circumference

    circumfrence(){
        let circ = 2*3* this.radius
        console.log(`circle circumference is ${circ}`);
        console.log(`circle color is ${this.color}`)
    }    
}
const circ = new circle(17 , "red");
circ.circumfrence();