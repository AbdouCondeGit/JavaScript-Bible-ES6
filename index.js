//Arrow function does not have own this, they are attached to the surrounded context

var person1={
    name:"Conde Abdourahamane",
    age: 26,
    present: function()
    {
        setTimeout(function()
        {
            console.log("This is "+this.name + " , He is " + this.age) 
        }.bind(this), //We need bind here because we don't use arrow function
        2000)
    } 
}

var person2={
    name:"Conde Abdourahamane",
    age: 26,
    present: function(){
        setTimeout(()=>{
            console.log("This is "+this.name + " , He is " + this.age) 
        },2000) // Here, there is no need to bind thanks to arrow function whose this is the surronding context : person2
    }
}

var anotherPerson1={
    name: "Conde Souleymane",
    age: 15,
}

var anotherPerson2={
    name: "Conde Karifa",
    age: 15,
}

console.log(person1.present.call(anotherPerson1)) //This is undefined , He is undefined
console.log(person2.present.call(anotherPerson2)) //This is Conde Souleymane , He is 15


