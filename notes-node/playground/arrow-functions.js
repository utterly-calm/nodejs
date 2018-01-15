var square = x => x * x;
console.log(square(10));

var user = {
  name: "Vipul",
  sayHi: () => {
    console.log(`Hi, I'm ${this.name}`); //this.name won't work
  },
  sayHiAlt() {
      console.log(arguments);
    console.log(`Hi, I'm ${this.name}`); // this.name should work
  }
};

user.sayHiAlt(1,2,3);
