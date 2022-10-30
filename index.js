// Code your solution here


function findMatching(drivers , match){
   const newArray = drivers.filter(function(name){
        return name.toLowerCase() === match.toLowerCase()
    })
return newArray
}

function fuzzyMatch(drivers , match){
    const newArray = drivers.filter(function(name){
        return name.charAt(0) === match.charAt(0)
    })
return newArray
}

function matchName(drivers , match){
    const newArray = drivers.filter(function(name){
        return name.name === match
    })
return newArray
}