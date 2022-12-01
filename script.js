//example 1
class Car {
  constructor(brand, color) {
    this.brand = brand; // key = value
    this.color = color;
  }
  printcolor(str) {
    return str + this.color;
  }
}
var test = new Car("Audi", "black");
var result = test.printcolor("the color of my car is ");
console.log(result);


//example 2
class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  get radiusCircle() {
    return this.radius;
  }
  get colorCircle() {
    return this.color;
  }
  set radiusCircle(radius) {
    this.radius = radius;
  }
  set colorCircle(color) {
    this.color = color;
  }
  get toString() {
    return `"Circle[radius=${this.radius}, color=${this.color}]"`;
  }
  get areaCircle() {
    return Math.PI * this.radius * this.radius;
  }
  get circumferenceCircle() {
    return 2 * Math.PI * this.radius;
  }
}
var obj1 = new Circle(1.0, "red");
console.log(obj1.radiusCircle); //get radiusCircle

obj1.radiusCircle = 2.2;
console.log(obj1.radiusCircle); //set radiusCircle  

// Task 
//question 1
class person {
  constructor(name,age,place,job){
      this.name = name;
      this.age = age;
      this.place = place;
      this.job = job;
}

getDetails(){
return(`The name of the person is ${this.name} and her age is ${this.age}  works at ${this.place} as a ${this.job}`)
}
}

let person1 = new person ("Ayesha",24,"chennai","actor")

console.log(person1.getDetails());

//question 2

class Uber {
  constructor(distance,rate,waitingperiod){
      this.distance=distance;
      this.rate=rate;
      this.waitingperiod= waitingperiod;
  }
  setDistance(dist){
      this.distance=dist;
  }
  getRideDetails(){
      return(`The distance of the ride is ${this.distance} km with rate of RS.${this.rate} 
      with a waiting period of ${this.waitingperiod} minutes`)
}
getPrice(){
let price =(this.distance * this.rate) + (5*this.waitingperiod)
return price;
}
  }


let uber1 = new Uber (40, 20, 10);
uber1.setDistance(30);

console.log(uber1.getPrice())
console.log(uber1.getRideDetails())

