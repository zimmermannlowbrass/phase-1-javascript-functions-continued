// code your solution here
function saturdayFun(fun = "roller-skate") {
    return `This Saturday, I want to ${fun}!`;
}

function mondayWork(noFun = "go to the office") {
    return `This Monday, I will ${noFun}.`;
}

function wrapAdjective(str = "*") {
    const innerFunction = function (str2 = "special") {
        return `You are ${str}${str2}${str}!`
    }
    return innerFunction;
}