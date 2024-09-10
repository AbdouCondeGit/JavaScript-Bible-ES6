const a= ["abdou", 4, 9, 10, null]
const aBis= ["abdou", 4, 9, 10]
const b= [10, 4, 9, 15, 100]
const c= [150,120,110,80]
const d= [1,2,5,100,1000]
const e= [1,2,5,3,1000]
const arrayOfObjects=[
    {name: "Abdourahamane Condé",
     age: 26,
     Nationality: "Guinean"
    },
    {name: "Souleymane Condé",
        age: 14,
        Nationality: "Guinean"
    },
    {name: "Drissa Diarrassouba",
        age: 26,
        Nationality: "Ivoirian"
    }
]

const arrayOfArrays=[a,aBis,b,c,d,e]

const isSortedInAscending= (array)=>{
    const length=array.length
    for(let index=0;index<length-1;index++){
        if(array[index]>array[index+1]){
            return false;
        }
    }
    return true;
}

const isSortedInDescending= (array)=>{
    const length=array.length
    for(let index=0;index<length-1;index++){
        if(array[index]<array[index+1]){
            return false;
        }
    }
    return true;
}

const arrayChecker= (array)=>{
    if(array.some(element=>typeof(element)!="number")){
        return "Some elements are not numbers";
    }else if(isSortedInAscending(array)){
        return "Array is sorted in ascending order";
    }else if(isSortedInDescending(array)){
        return "Array is sorted in descending order";
    }
    else{
        return "Array is sorted not sorted";
    }
}

const arrayCheckerNew= (array)=>{
    if(array.some(element=>typeof(element)!="number")){
        return "Some elements are not numbers";
    }
    if(array.every((element,index, array)=>
        index>0
        ?element>=array[index-1]
        :true)){
        return "Array is sorted in ascending order";
    }
    
    if(array.every((element,index, array)=> {
        return (
        index > 0 
        ? element<=array[index-1]
        :true )
    })){
        return "Array is sorted in descending order";
    }
    
    return "Array is sorted not sorted";

}

const areArraysOfPrimitiveTypesInstancesEqual= (array1, array2)=>{
    return array1.length!=array2.length && array1.every((element,index)=>element==array2[index])

}
const doesArrayInclude= (array, searchElement)=>{
    if(typeof(searchElement)!=="object"){
        return array.Includes(searchElement)
    }
    else{
        return array.map(JSON.stringify).includes(JSON.stringify(searchElement))
    }
}

// console.log(arrayChecker(a))
// console.log(arrayCheckerNew(c))

// console.log(areArraysOfPrimitiveTypesInstancesEqual(a,aBis))
console.log(doesArrayInclude(arrayOfArrays,aBis))