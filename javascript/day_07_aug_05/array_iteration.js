let cars = ['Tata', 'Honda', 'Maruti', 'Toyota'];

// 1. Loop
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
console.log('==================');

// 2. for-in (ES-6  2015)
for (i in cars) {
    console.log(cars[i]);
}
console.log('==================');

// 3. for-of (ES-6  2015)
for (car of cars) {
    console.log(car);
}
console.log('==================');

// 4. forEach()
cars.forEach((val, ind) => {
    console.log(val, ind);
})