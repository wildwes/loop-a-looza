// Make an array from the one below called fave_demo
// that contains only ages from 18 - 49 let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102]







// Loop over the following array and
let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102]

let fave_demo = [];

for (let i = 0; i < ages.length; i++) {
    const element = ages[i];
    // && is for both, || is either
    if (element >= 18 && element <= 49) {
        fave_demo.push(element);

    }

}
console.log(fave_demo);

// capitalize 'the'
// insert a comma after 'teacher'
// output "Yoda says, "The greatest teacher, failure is"
// let yoda_quote = ["the", "greatest", "teacher", "failure", "is"]

let yoda_quote = ["the", "greatest", "teacher", "failure", "is"]
let output = [];

for (let i = 0; i < yoda_quote.length; i++) {
    let element = yoda_quote[i];
    if (element == "the") {
        // 0 refers to index 0 and 1 refers to index 1
        let letterT = element.slice(0, 1).toUpperCase();
        let suffix = element.slice(1)
        let capitlizedWord = letterT + suffix;
        console.log(letterT);
        console.log(capitlizedWord)
        yoda_quote[i] = capitlizedWord
        console.log(yoda_quote);
    }
}

if (element == "teacher") {
    let comma = element + ",";
    console.log(comma);
    yoda_quote[i] = comma;
    console.log(sentence)
}

let yodaString = yoda_quote.join(" ");

console.log(`Yoda says, ${yodaString}`)
