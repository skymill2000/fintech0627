let car = {
  name: "sonata",
  ph: 220,
  start: function () {
    console.log("engine start");
  },
  stop: function () {
    console.log("engine stop");
  },
};

let carname = car.name;
let carph = car.ph;

const { name, ph } = car;

console.log(name, ph);

const car3 = "sonata";
const car1 = "saab";
const car2 = "bmw";

const cars = [car3, car1, car2];

const [a] = cars;
console.log(a);
