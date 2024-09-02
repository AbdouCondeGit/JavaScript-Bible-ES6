class ButtonCreator {
    constructor(content) {
        this.content=content
    }

     createButton() {
        var btn = document.createElement("button");
        var clickCount = 0;
        btn.innerHTML = this.content;
        btn.addEventListener("click", () => {
            btn.innerHTML = "button was clicked " + ++clickCount + " times";
        });

        document.body.appendChild(btn);
    }
}

var buttonCreator= new ButtonCreator("Button 1")

// buttonCreator.createButton()
// buttonCreator.createButton()

const myCities= ["Conakry", "Kouroussa","Singapore"]
const prereRegisteredStudents= [
    {
   "isu": "0JFBELHFKV834798",
   "name": "Conde Souleymane"
    },  
    {
   "isu": "9HLJR3FLK48943R7",
   "name": "Conde Karifa"
    },
    {
   "isu": "0943875683483479",
   "name": "Keita Moussa"
    },
    {
   "isu": "90348789FBF94844",
   "name": "Conde Kaba"
    }
]
const provideElementInfo= (element, index)=>{
    return element+ " is located at the index "+ index+ " in the myCities array"
}

const convertElementToObject= element=>({
    isu: element.isu,
    name : element.name
})

// (function printArrayInfo(){
//     for(let i=0;i<myCities.length; i++){
//         console.log(arrayInfo(i));
//     }
// })()

console.log("                                                               ####################################")

// myCities.forEach((element, index)=>console.log(provideElementInfo(element,index)))
const prereRegisteredStudentsArray=prereRegisteredStudents.map(convertElementToObject)
// const prereRegisteredStudentsArray1=prereRegisteredStudents.map(element=>JSON.parse(element))
// console.log(prereRegisteredStudentsArray)
// console.log(prereRegisteredStudentsArray1)

const items=[
    {
        name: "iphoneX",
        price: 450,
        count: 10
    },
    {
        name: "macbook pro 13",
        price: 1000,
        count: 15
    },
    {
        name: "airpod pro",
        price: 220,
        count: 1
    },
    {
        name: "apple watch",
        price: 300,
        count: 0
    },
]

console.log(items.some(item=>item.count>5))

