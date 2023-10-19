const userInputString = prompt(
    "Please enter some ice cream flavors separated by commas.",
    " vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

const IceCreamFlavors = userInputString.split(",");


const IceCreamOrder = {
    IceCreamFlavors : "Help me!!!"
}

console.log(Object.keys(IceCreamOrder));

function OrderCount(IceCreamOrder){
    //    I believe I should be putting a loop in here but I can't for the life of me figure out 
    // the logic to build out a function which counts how many duplicates of each flavor there are. 
    for (const IceCreamFlavors in IceCreamOrder) {
        console.log(IceCreamFlavors)
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