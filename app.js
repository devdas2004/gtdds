// console.log("Hello world")

// let a;
// a=18;
// a=27;
// console.log(a)

// var a;
// a=123;
// a=123;
// console.log(a)

// const a=123;
// console.log(a)

// console.log(1+1);
// console.log(2*1);
// console.log(3**3);
// console.log(12-3);
// console.log(12/1);
// console.log(123%10);

// logical operators
// console.log(10>9 && 12<33);
// console.log(122>1 || 1>3);
// console.log(!(12>2));

// comparison operators
// console.log(20<30);
// console.log(25<=25);
// console.log(10==19);
// console.log(1==="1");

//  Unary operators
// let a=19;
// let c=++a + ++a - --a + a-- + a--;
// console.log(c);

// let c=95;
// let d=++c + c++ - c++ + c-- + c++;
// console.log(d);

// Assignment operators
// let a=10;
// a*=10;
// console.log(a);

// // Datatypes
// let c='a';
// console.log(parseInt('a'));

// Objects
let user = {
    Name: "Devdas",
    ID: 1234,
    Phoneno: 1234567890,
    EMail: "Dev1234@gmail.com",
    BioData: {
        DOB: "06-04-2004",
        Age: "21",
         Education: {
            Sslc :"SAV"//"Degree"
    }
}}
// user.Name = "Das"//For updating existing data
console.log(typeof(user.BioData.Education.Sslc));//For accessing existing data
// console.log(typeof(user))