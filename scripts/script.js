const user = {
  firstname: "John",
  lastname: "Connor",
  age: 30,
  date: "10.10.2000",
  height: 186,
  animals: false,
  food: ["soup", "pizza", "fruit"],
  getNameDate: function() {
    console.log(this.firstname + " " + this.lastname + " " + this.date);
  }
};

user.getNameDate();
console.log(user.food[0]);
console.log("-------------------------------");

const a = 10;
const b = 5;
console.log("a =", a);
console.log("b =", b);
let x = a + b;
console.log("result sum", x);
x = a - b;
console.log("result diff", x);
x = a * b;
console.log("result mult", x);
x = a / b;
console.log("result div", x);
