/*- Declare a student object with name, favouriteFood and city.
- Get the number of characters in each property, then add them together to
to obtain a number.
- If the number is even, display "even" in the console.
- If this number is odd, display it in the "odd" console.
As for the rest, there are several possible solutions:
- Object.keys() => retrieve the properties
- Object.values() => retrieve the values*/

let student = {
    name: "Jean",
    favouriteFood: "Pizza",
    city: "Paris"
}
let number = Object.values(student)
let nombrecarac = 0

for (let i = 0; i < number.length; i++) {
    nombrecarac = nombrecarac + number[i].length
}

console.log(nombrecarac % 2 == 0 ? "pair" : "impair")
