
class movie {
    constructor(title,studio,rating){
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
}
var mov1 = new movie("Beast","Sunpictures","pg")
console.log(mov1.title,mov1.studio,mov1.rating)

class movie2 {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
var mov2 = new movie2 ("jaibeeam","2D","pg-13");
console.log(mov2.title,mov2.studio,mov2.rating);

class movie3 {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

rated(){
    for(let i=0; i<this.rating.length;i++){
        if(this.rating[i]=="pg"){
            console.log(this.title[i],this.studio[i],this.rating[i]);            
        }
        if(this.rating[i]=="pg-13"){
            console.log(this.title[i],this.studio[i],this.rating[i]);            

            }
        }

    }
}
var mov3 = new movie3(["varisu","thinvu","vathi"],["lyca","studiogreen","2D"],["pg","pg-13","pg-13"]);
mov3.rated()
