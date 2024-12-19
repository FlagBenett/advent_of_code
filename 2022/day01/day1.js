const fs = require("fs");
const { parse } = require("csv-parse");

let elfId = 0
let elfCalories=0
let elvesCalories = []
let richestElf
let richestElfCalories=0

fs.createReadStream('./input.csv')
.pipe(parse({ delimiter: ",", from_line: 1 }))
.on("data", function (row) {
  if(Number(row[0])===0){
    elvesCalories[elfId]=elfCalories
    if(elfCalories>=richestElfCalories){
        richestElf = elfId
        richestElfCalories = elfCalories
    }
    elfId++
    elfCalories = 0
  }
  else{
    elfCalories = elfCalories + Number(row[0])
  }
})
.on("error", function (error) {
  console.log(error.message);
})
.on("end", function () {
  console.log('richestElfCalories', richestElfCalories)
  console.log('richestElf', richestElf)
  const top1 = Math.max(...elvesCalories)
  elvesCalories[elvesCalories.indexOf(top1)]=0
  const top2 = Math.max(...elvesCalories)
  elvesCalories[elvesCalories.indexOf(top2)]=0
  const top3 = Math.max(...elvesCalories)
  elvesCalories[elvesCalories.indexOf(top3)]=0

  console.log('top1', top1)
  console.log('top2', top2)
  console.log('top3', top3)
  console.log ('sum top 3 : ', top1 + top2 + top3)

});
