const shallowEquality = (obj1 , obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length){
        return false; 
    }

    for(let key of keys1){
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}

function shallowEquality2(obj1,obj2) {

    if(Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

    for(let key of Object.keys(obj1)){
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}


let book1 = {
    isbn:123456789,
    title: 'JavaScript Basics',
}

let book2 = {
    isbn:123456789,
    title: 'JavaScript Basics',
}

console.log(shallowEquality(book1, book2)); 