// Define the saturdayFun function
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Define the mondayWork function expression
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;  // Ensure the period is included only here
}

// Define the wrapAdjective function 
function wrapAdjective(highlight = '*') {
    return function(adjective) {
        return `You are ${highlight}${adjective}${highlight}!`;
    }
}

// Export the functions
module.exports = { saturdayFun, mondayWork, wrapAdjective };

