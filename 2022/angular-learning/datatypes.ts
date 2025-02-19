// let lName: string = "john";

// console.log(lName);

// let newName = lName.toUpperCase();
// console.log(newName);

// let dob = "22";
// let result = parseInt(dob);
// console.log(result);

// let isVal:boolean = false;
// console.log(isVal);

// let empList =["test", "vignesh", 123];
// console.log(empList);

// let empList: Array<string>;

// empList = ["terr", 123]
// let list: Array<number>;

// list = [1,2,3,4,5,6,7,8,9,0]

// let results = list.filter((unit)=>unit>=3);

// let results = list.find((n)=>n===11)
// if (results == undefined|| null){
//     console.log("no number found");
// } else {
//     console.log(results);
// }

// let sum = list.reduce((acc, num)=>acc + num);
// console.log(sum);

enum Color {
    Red,
    Green,
    Blue
}

let c=Color.Green
console.log(c);

let swapnumbers : [number,number]

function swap(num1,num2):[number,number]{
    return [num2,num1]
}

swapnumbers = swap(10,20)