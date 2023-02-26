
class personDetails{
    constructor(name,age,dob,gender,phoneNumber){
        this.name = name;
        this.age = age;
        this.dob = dob;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
    }
}
class member1 extends personDetails{
    constructor(name,age,dob,gender,phoneNumber){
        super(name,age,dob,gender,phoneNumber);  
    }
    Person1(){
        console.log("person1");
        console.log(this.name);
        console.log(this.age);
        console.log(this.dob);
        console.log(this.gender);
        console.log(this.phoneNumber)
    }   
}
class member2 extends personDetails{
    constructor(name,age,dob,gender,phoneNumber){
        super(name,age,dob,gender,phoneNumber);  
    }
    Person2(){
        console.log("person2");
        console.log(this.name);
        console.log(this.age);
        console.log(this.dob);
        console.log(this.gender);
        console.log(this.phoneNumber)
    }   
}
class member3 extends personDetails{
    constructor(name,age,dob,gender,phoneNumber){
        super(name,age,dob,gender,phoneNumber);  
    }
    Person3(){
        console.log("person3");
        console.log(this.name);
        console.log(this.age);
        console.log(this.dob);
        console.log(this.gender);
        console.log(this.phoneNumber)
    }   
}
const Persons1 = new member1("Shan","26","06-10-1995","male","9823895634");
const Persons2 = new member2("Nawin","28","15-03-1994","male","8912567890");
const Persons3 = new member3("sherya","23","5-12-1997","female","8489905657");

Persons1.Person1();
Persons2.Person2();
Persons3.Person3();

