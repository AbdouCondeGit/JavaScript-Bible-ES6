var papa={
    firstname : "Kaba",
    lastname : "Condé",
    age: 73,
    greeting: function(){
        setTimeout(function(){
            console.log("Hello my son, this is your father: "+this.lastname+" "+this.firstname+" "+this.age)
        }.bind(this), 2000); // We need to bind because context is lost for setTimeout callback argument 
        console.log(this)
    }
}

var mama={
    firstname : "Saran",
    lastname : "Condé",
    age: 55,
    greeting: function(){
        setTimeout(()=>{
            console.log("Hello my son, this is your father: "+this.lastname+" "+this.firstname+" "+this.age)
        }, 2000); // We don't need to bind because setTimeout callback argument inherits context from greeting method (mama)
        console.log(this)
    }
}

var me={
    firstname : "Abdourahamane",
    lastname : "Condé",
    age: 73,
    greeting: function(){
        var greet=()=>{
        console.log("Hello my son, this is your father: "+this.lastname+" "+this.firstname+" "+this.age)
       } // We don't need to bind because greet inherits context from greeting method (me)

       greet()
    }
}


var bro={
    firstname : "Souleymane",
    lastname : "Condé",
    age: 14,
    greeting: function(){
        var greet=function(){
        console.log("Hello my son, this is your father: "+this.lastname+" "+this.firstname+" "+this.age)
       } // We need to bind here because context is lost 

       greet()
    }
}
// papa.greeting()
// mama.greeting()
// me.greeting()
//bro.greeting()