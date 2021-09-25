function onlyVowelsOf(inputString){
    const vowels = ["a","e", "i", "o", "u"];
    const strArray = inputString.toLowerCase().split("");
    const outputArray = [];
    for (const letter of strArray){
        if (vowels.includes(letter)){
            outputArray.push(letter);
        }
    }
    const outputString = outputArray.join('');
    return outputString;
}


console.log(onlyVowelsOf("ADFOIUAOEFDIEUSAEDIOFUASO"));
