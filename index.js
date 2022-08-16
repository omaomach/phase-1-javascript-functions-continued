function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;

}

console.log(saturdayFun("bathe my dog"));

const mondayWork = function(activity = 'go to the office') {

    return `This Monday, I will ${activity}.`;
}

console.log(mondayWork('code'));

function wrapAdjective(one = '*') {
    return function(two = 'special') {

        return `You are ${one}${two}${one}!`;
    } 
}

console.log(wrapAdjective('%')('a dedicated programmer'));
