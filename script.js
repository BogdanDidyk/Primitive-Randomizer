function getRandomInteger(min = 0, max = 9) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getrandomFloat(min = 0, max = 9) {
    return Math.random() * (max - min) + min;
}

function getRandomDigit() {
    return getRandomInteger();
}

function getRandomBoolean() {
    return Math.random() < 0.5;
}

function getRandomLowerLatinLetter() {
    return String.fromCharCode(getRandomInteger(97, 122));
}

function getRandomUpperLatinLetter() {
    return String.fromCharCode(getRandomInteger(65, 90));
}

function getRandomItemFrom(iterable) {
    const arr = Array.from(iterable);
    const randomIndex = getRandomInteger(0, arr.length - 1);
    return arr[randomIndex];
}

function getRandomSpecialCharacter() {
    const SPECIAL_CHARACTERS = "~!@#$%^&*()_-+={}[]|:;<>,.?/'\"`\\";
    return getRandomItemFrom(SPECIAL_CHARACTERS);
}

function getRandomString(length, randomStringOptions = {}) {
    const {
        useDigits = true,
        useLowerLatinLetters = true,
        useUpperLatinLetters = true,
        useSpecialCharacters = true
    } = randomStringOptions;
    
    const options = [];
    if (useDigits === true) options.push(getRandomDigit);
    if (useLowerLatinLetters === true) options.push(getRandomLowerLatinLetter);
    if (useUpperLatinLetters === true) options.push(getRandomUpperLatinLetter);
    if (useSpecialCharacters === true) options.push(getRandomSpecialCharacter);
    
    let str = "";
    for (let i = 0; i < length; i++) {
        const randomFunc = getRandomItemFrom(options);
        str += randomFunc();
    }
    
    return str;
}