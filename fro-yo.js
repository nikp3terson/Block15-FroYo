const userInputString = prompt(
    "Please enter some froyo flavors separated by commas.",
    " vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

const IceCreamFlavors = userInputString.split(",");


const IceCreamOrder = {
    IceCreamFlavors
}

console.log(Object.keys(IceCreamOrder));

function OrderCount(IceCreamOrder){
    //    I believe I should be putting a loop in here but I can't for the life of me figure out 
    // the logic to build out a function which counts how many duplicates of each flavor there are. 
    for (const IceCreamFlavors in IceCreamOrder) {
// I imagine more loop-ness should go here. At a loss for what it should be.
    }
    return IceCreamFlavors
}




console.table(IceCreamFlavors)
console.log(OrderCount(IceCreamOrder))


//  Eventually was able to get this code (below) to work after scowering the internet , 
// but since it used the .each I figure it probably isnt what you are looking for. 
// Tried my best to construct a working loop above but I am having such a hard time 
// building logical structures to make loops functional. 
// Knowing where to begin with these word problems is hard on it's own! 
// Definetly need more practice with functions, loops, arrays, objects, etc. 


const counts = {}
IceCreamFlavors.forEach(function (x) { counts[x] = (counts[x] || 0) + 1;})
console.log(counts)


// Update: After looking at the solution I see my biggest mistake is probably 
// creating an object and putting the array in the object before making the function.
// Did not think about how the function would need to split the array - that makes sense. 
// I also understand making the empty object with "const order = {};".
// and the basic loop for (let i = 0; i < flavorArray.length; i++) { makes sense to me as well

// where I am getting lost is when we enter the 'if' and place the array in the object... after that I 
// am lost. order[flavorArray[i]] =+ 1 else { order[flavorArray[i]] = 1} is the part that I really
// need to figure out. 