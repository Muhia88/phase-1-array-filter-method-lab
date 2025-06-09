// findMatching() function

function findMatching(arr, name){
    return arr.filter(drivers => drivers.toLowerCase() === name.toLowerCase());
}

// fuzzyMatch() function
function fuzzyMatch(arr, letters){
    return arr.filter(driver => driver.startsWith(letters));
}

// matchName() function
function matchName(arr, name){
    return arr.filter(driver => driver.name === name);
}