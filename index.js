const a= ["abdou", 4, 9, 10, null]
const b= [10, 4, 9, 15, 100]
const c= [150,120,110,80]
const d= [1,2,5,100,1000]

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
    }
    
    if(isSortedInAscending(array)){
        return "Array is sorted in ascending order";
    }
  
    if(isSortedInDescending(array)){
        return "Array is sorted in descending order";
    }
}

console.log(arrayChecker(d))