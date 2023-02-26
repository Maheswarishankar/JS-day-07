
//1.Get all the countries from the Asia continent/region using Filter fuction............................................

let request = new XMLHttpRequest();
request.open("GET",'https://restcountries.com/v3.1/all');
request.send();
request.onload = function(){

    let countryData = JSON.parse(this.responseText)
    countryData = countryData.filter(function(data){
        return data.region === "Asia";
    })
    console.log(countryData);
}

//2.Get all the countries with a population of less than 2lakhs using Filter fuction...........................................

var request1=new XMLHttpRequest();
request1.open('GET', 'https://restcountries.com/v3.1/all');
request1.send();
request1.onload= function populate() {
    var countryData1=JSON.parse(this.responseText);
    var filterdArray=countryData1.filter((ele)=>{
        return ele.population < 200000
    })
    console.log(filterdArray)
}

//3.Print the follwing details name,capital,flag using forEach function..................................................................
let request2 = new XMLHttpRequest();
request2.open('GET', 'https://restcountries.com/v3.1/all');
request2.send();
request2.onload = function print(){
    let countryData2 = JSON.parse(this.responseText);
    let result2=countryData2.forEach(element => {
        console.log(element.name);
        console.log(element.capital);
        console.log(element.flag);

    })
}

//4.print the total population of countries using reduce function..................................................

let request3=new XMLHttpRequest();
request3.open('GET', 'https://restcountries.com/v3.1/all');
request3.send();
request3.onload= function print() {
    let countryData3=JSON.parse(this.responseText);
    let result3=countryData3.reduce((population,element)=>{
               return population+element.population
    },0)
     console.log(result3);   
}

//5.print the country which uses US Dollers as currency............................................................

let request4=new XMLHttpRequest();
request4.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
request4.send();
request4.onload= function print() {
    let countryData4=JSON.parse(this.responseText);
    let result4=countryData4.filter((ele)=>{
        return ele.currencies[0].code==="USD";
    })
    console.log(result4);
 
}























