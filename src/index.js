module.exports = function toReadable (number) {
    let num1 = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(" ");
    let num2 = 'twenty thirty forty fifty sixty seventy eighty ninety'.split(" ");
    let rang = number%10;

    if (number < 20) {
        return num1[number];
    } else if (number < 100) {
        return num2[Math.floor(number/10)-2] + (rang? " " + num1[rang]: "");
    } else if (number < 1000) {
        return num1[Math.floor(number/100)] + " hundred" + (number%100 == 0? "": " " + toReadable(number%100));
    } else {
        return toReadable(Math.floor(number/1000)) + " thousand" + (number%1000 != 0? " " + toReadable(number%1000): "");
    }
};


