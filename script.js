//The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:
//title, which is a String representing the title of the movie
//studio, which is a String representing the studio that made the movie
//rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String 
//representing the studio, and a String representing the rating as its arguments, and sets the respective class 
//properties to these values.

    class movie {
        constructor(title , studio , rating){
            this.title = title;
            this.studio = studio;
            this.rating = rating;
        }

        getrating = () => {
            return `The rating is ${this.rating}`;
        };
    }
   var Film = new movie("Avatar","20th Century Fox","PG13");
   console.log(Film.getrating());

//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is 
//provided.

class movie {
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = "PG";
    }
}

//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of 
//only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie 
//instances. The returned array need not be full.
//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio \
//“Eon Productions”, and the rating “PG­13”

  var Film = new movie("Casino Royal", "Eon Productions","PG13");

//3.Write a “person” class to hold all the details.

  class PersonName {
    constructor(Firstname , Lastname , age , gender , work , place ) {
        this.Firstname = Firstname;
        this.Lastname = Lastname;
        this.age = age;
        this.gender = gender;
        this.work = work;
        this.place = place;
      }

        }

const person = new PersonName("John" , "deo" , 25 , "Male" , "professor" , "Anna university");
console.log(person);

//4.write a class to calculate the uber price.
class uberPrice {
    constructor(Distance , Price) {
        this.Distance = Distance;
        this.Price = Price;
              }
          
      get = () => {
        
            totalPrice = Price * this.Distance;
        
        return totalPrice;
      }
        }

const uber = new uberPrice(2,60);
let Distance = 10 ;
let Price = 100;
let totalPrice;


console.log(uber.get());