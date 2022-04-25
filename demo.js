let animals = [
    {
        'type': 'cat',
        'legs': 4
    },
    {
        'type': 'dog',
        'legs': 4
    },
    {
        'type': 'kangaroo',
        'legs': 2
    },
    {
        'type': 'fish',
        'legs': 0
    },
    {
        'type': 'snake',
        'legs': 0
    },
    {
        'type': 'horse',
        'legs': 4
    },
] 

// What am I doing?
// I want only four legged animals
// What statement will be true for the ones I want to keep?
// animal.legs == 4

let fourLeggedAnimals = animals.filter(function(animal){
    if(animal.legs == 4){
        return true;
    }
    else{
        return false;
    }
    
});

// What am I doing?
// I want to capitalize all animal types
// What line of code will do that?
// el.toUppercase()
let capitilizedAnimals = animals.map(function(el){
    console.log(el)
    return el.type.toUpperCase(0)
})


console.log('the end')