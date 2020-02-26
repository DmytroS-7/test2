const user = {
  firstName: "John",
  lastName: "Connor",
  ageUser: 30,
  dateOfBirth: "10.10.2000",
  heightUser: 186,
  animalsUser: false,
  foodFavorite: ["soup", "pizza", "fruit"],
  getFullNameAndDateOfBirth: function() {
    console.log(this.firstName + " " + this.lastName + " " + this.dateOfBirth);
  }
};

user.getFullNameAndDateOfBirth();
console.log(user.foodFavorite[0]);
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
