let number = 10;
undefined
for (let i = 0; i < number; i++) {
    console.log(i) 
}
VM242:2 0
VM242:2 1
VM242:2 2
VM242:2 3
VM242:2 4
VM242:2 5
VM242:2 6
VM242:2 7
VM242:2 8
VM242:2 9
undefined
number = 11;
11
for (let i = 1; i < number; i++) {
    console.log(i) 
}
VM277:2 1
VM277:2 2
VM277:2 3
VM277:2 4
VM277:2 5
VM277:2 6
VM277:2 7
VM277:2 8
VM277:2 9
VM277:2 10

let numbers = 21;
undefined
for (let i =0; i<numbers; i=i+2) {
    console.log(i)
}
VM2751:2 0
VM2751:2 2
VM2751:2 4
VM2751:2 6
VM2751:2 8
VM2751:2 10
VM2751:2 12
VM2751:2 14
VM2751:2 16
VM2751:2 18
VM2751:2 20
undefined

let printNumbersTill = numbers => {
    for (let i = 0; i<numbers; i++){
        console.log(i)
    }}
undefined
printNumbersTill(20);
VM2956:3 0
VM2956:3 1
VM2956:3 2
VM2956:3 3
VM2956:3 4
VM2956:3 5
VM2956:3 6
VM2956:3 7
VM2956:3 8
VM2956:3 9
VM2956:3 10
VM2956:3 11
VM2956:3 12
VM2956:3 13
VM2956:3 14
VM2956:3 15
VM2956:3 16
VM2956:3 17
VM2956:3 18
VM2956:3 19
undefined
printNumbersTill(15);
VM2956:3 0
VM2956:3 1
VM2956:3 2
VM2956:3 3
VM2956:3 4
VM2956:3 5
VM2956:3 6
VM2956:3 7
VM2956:3 8
VM2956:3 9
VM2956:3 10
VM2956:3 11
VM2956:3 12
VM2956:3 13
VM2956:3 14
undefined

let getGreetingTo = name => {
    return "Hello "+name+"!"
}
undefined
getGreetingTo("Tofi");
"Hello Tofi!"
let getGreetingTo = name => {
    console.log("Hello "+name+"!")
}
undefined
getGreetingTo("Tofi");
VM3220:2 Hello Tofi!
undefined


let printValues = array => {
    for (let i =0; i< array.length; i++) {
        console.log(array[i])
    }}
undefined
printValues([0, 3, 6, 7, 9]);
VM3539:3 0
VM3539:3 3
VM3539:3 6
VM3539:3 7
VM3539:3 9
undefined

let myNumbers = [10, 20, 30, 50, 12];
undefined
myNumbers.forEach ((number) => {
    for ( let i =0; i<number;i++) {
        console.log(number)
    }})
10VM4054:3 10
20VM4054:3 20
30VM4054:3 30
50VM4054:3 50
12VM4054:3 12
undefined