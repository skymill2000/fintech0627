const array = [2, 3, "test", { name: "test" }];
console.log(array);
//Java
// int [] numbers = new int[6];
// String [] string = new String [5];
// ArrayList

const car = "sonata";
const car1 = "saab";
const car2 = "bmw";

const cars = [car, car1, car2];

console.log(cars[0]);

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

for (element of cars) {
  console.log(element);
}

cars.map((data) => {
  console.log(data);
});
