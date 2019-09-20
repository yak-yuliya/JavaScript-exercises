alert("Hello there!");
document.write("heyhey");

//filter - remove array items
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
const sNames = names.filter(name => name.charAt(0) === 'S');
console.log(sNames);

//reducer - count names starting with G
const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];
const gNameCount = names.reduce(
    (count, name) => {
        if (name[0] === 'G') {
            return count + 1;
        }
        return count;
    },
    0
);
console.log(gNameCount);


const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
let numberOf503 = phoneNumbers.reduce(
    (count, number) => {
        if (number.substring(0,5) === '(503)') {
            return count + 1;
        }
        return count;
    },
    0
);
console.log(numberOf503);
// numberOf503 should be: 3
// Write your code below



//map - Transform Array Items with map()
const strings = ['1', '2', '3', '4', '5'];
const numbers = strings.map(string => parseInt(string, 10));
console.log(numbers);

const fruits = ['apple', 'pear', 'cherry'];
const capitalizedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(capitalizedFruits);

const prices = [5, 4.23, 6.4, 8.09, 3.20];
const priceToDollars = price => `$${price.toFixed(2)}`
const dollarPrices = prices.map(priceToDollars);
console.log(dollarPrices);
// Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ]

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let abbreviatedDays = daysOfWeek.map(day => day.substring(0, 3));
console.log(abbreviatedDays);
// abbreviatedDays should be: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// Write your code below
