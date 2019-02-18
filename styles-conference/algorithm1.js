function sumStr(i, char) {
    let str = "";
    let index;
    for (index = 0; index < i; index++) {
        str += char;
    }
    return str;
}

function printLine(count, num) {
    let str = "";
    let countHelf = Math.ceil(count / 2);
    let numHelf = Math.ceil(num / 2);
    let dif = countHelf - numHelf;
    str=sumStr(dif," ")+sumStr(num,"*");
    return str;
}

function mainFun(count){
    let realCount=count*2-1;
    let index;
    for(index=0;index<count;index++)
    {
        console.log(printLine(realCount,index*2+1));
    }
}

module.exports = mainFun;
