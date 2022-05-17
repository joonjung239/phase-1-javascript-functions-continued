// code your solution here
function saturdayFun(act='roller-skate'){
    return `This Saturday, I want to ${act}!`;
}

function mondayWork(act1='go to the office'){
    return `This Monday, I will ${act1}.`
}
function wrapAdjective(visualFlair = '*'){
    const innerfunction = function(adjective = 'special'){
        return `You are ${visualFlair}${adjective}${visualFlair}!`
    }
    return innerfunction
}

wrapAdjective('~')('a goddamn genius')