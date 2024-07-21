//Arrow function does not have own this, they are attached to the surrounded context

var person1={
    name:"Conde Abdourahamane",
    age: 26,
    present: ()=>{
        return "This is "+this.name + " , He is " + this.age
    } //This here is always global or window
}

var person2={
    name:"Conde Abdourahamane",
    age: 26,
    present: function(){
        return "This is "+this.name + " , He is " + this.age
    } 
}

var anotherPerson={
    name: "Conde Souleymane",
    age: 15,
}

console.log(person1.present.call(anotherPerson)) //This is undefined , He is undefined
console.log(person2.present.call(anotherPerson)) //This is Conde Souleymane , He is 15