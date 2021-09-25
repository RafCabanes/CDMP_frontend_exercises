function ispalindrome(inputString){
    const strArray = inputString.split("");
    const reversedArray = strArray.reverse();
    const reversedString = reversedArray.join('');
    // return reversedString;
    if (inputString == reversedString){
        return true;
    } else if (inputString != reversedString){
        return false;
    } else {
        return 'error';
    }
}

const word = 'something';
console.log(ispalindrome(word));

const flipword = 'racecar';
console.log(ispalindrome(flipword));

