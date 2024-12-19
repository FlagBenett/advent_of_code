const data = require('./input.js');

const dataArray = data.split('\n'); // Split the data into lines
console.log(dataArray)
const leftColumnNumbers = dataArray.map(line => line.split(' ')[0]).sort((a,b)=>a-b)
const rightColumnNumbers = dataArray.map(line => parseInt(line.split(/\s+/)[1], 10)).sort((a,b)=>a-b);
const distanceArray = leftColumnNumbers.map((num, index) => Math.abs(num - rightColumnNumbers[index]));
const totalDistance = distanceArray.reduce((accumulator, current) => accumulator + current, 0);
console.log(totalDistance); // Output the total distance

const similarityArray = leftColumnNumbers.map((num)=> rightColumnNumbers.filter(item => item == num).length * num)
const totalSimilarity = similarityArray.reduce((accumulator, current) => accumulator + current, 0);

console.log(totalSimilarity)