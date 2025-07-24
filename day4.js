//array
//let number =[1,2,"three",true];
//let names=new Array("micky,john");

//console.log(number[2]);
//console.log(names.length);
//filter ()-it filtered the results arguments
//let result=number.filter(number =>number[1]);
//console.log(result);
//slice-delete tthe element based on index value
let number=[1,2,3,4,5];
let r=number.slice(1,3);
console.log(r)
//object
let details={
    name:"Lilly",
    totalmark:"95",
    //nested obj
    subject:{
        dbms:97,
        java:98,
    },
    avg:function(){
        let sum=this.subject.dbms+this.subject.java;
        return sum;
    }
}
console.log(details.totalmark);
console.log(details["name"]);
console.log(details.subject.dbms);
console.log(details.subject["java"]);
console.log(details.avg());


//const person ={
   // name:"Harley",
    //age:22,
    //city:"Chennai"
//};

//const{name,age,city}=person;
//console.log(name);//Harley
//console.log(age);//21
//console.log(city);//Chennai

//array DESTRUTURING
const person=["issac",24,"softwaredeveloper"];
const[name,age,designation]=person;
console.log(name+" "+age+" "+designation );
