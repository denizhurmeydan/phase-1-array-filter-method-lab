// Code your solution here
function findMatching(drivers, query) {
    return drivers.filter((driver) => driver.toLowerCase() === query.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter((driver) => driver.toLowerCase().indexOf(letters.toLowerCase()) === 0);
}

function matchName(drivers, name) {
    return drivers.filter((driver) => driver.name === name);
}

