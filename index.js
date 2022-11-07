// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun();

function mondayWork(job = "go to the office") {
    return `This Monday, I will ${job}.`
}
mondayWork();

function wrapAdjective(visual="*") {
    return function(inner="special") {
        return `You are ${visual}${inner}${visual}!`
    }
}
wrapAdjective();