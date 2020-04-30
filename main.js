/*
Make an array from the one below called fave_demo that contains only ages from 18 - 49 let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102]
Loop over the following array and
capitalize 'the'
insert a comma after 'teacher'
output "Yoda says, "The greatest teacher, failure is"
let yoda_quote = ["the", "greatest", "teacher", "failure", "is"]
*/

let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102]
let fave_demo = [];

for (let i = 0; i < ages.length; i++) {
    const element = ages[i];
    if (element >= 18 && element <= 40) {
        fave_demo.push(element);
    }
};
console.log(fave_demo);

// Second Exercise 

let yoda_quote = ["the", "greatest", "teacher", "failure", "is"]
let output = [];


for (let i = 0; i < yoda_quote.length; i++) {
    const element = yoda_quote[i];
    if (element == "the") {
        let letterT = element.slice(0, 1).toUpperCase()
        console.log(letterT);
        let he = element.slice(1)
        let capitalizeWord = letterT + he;
        console.log(capitalizeWord);
        yoda_quote[i] = capitalizeWord;
        console.log(yoda_quote);
    }
    if (element == "teacher") {
        let comma = element + ",";
        console.log(comma);
        yoda_quote[i] = comma;
        console.log(yoda_quote);
    }
}
let yodaString = yoda_quote.join(" ")
console.log(`Yoda says, "${yodaString}."`);