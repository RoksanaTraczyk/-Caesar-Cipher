const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const MAX_INDEX = ALPHABET.length;
const SHIFT = 13;

export default function caesar13(input) {
    if ('string' !== typeof (input) || '' === input) {
        throw new Error(`Input sentence ${input} is not a string!`);
    }

    let result = '';

    input.split("")
        .forEach(item => {
            if (isNaN(item)) {
                result += moveLetter(item);
            } else {
                result += item;
            }
        })

    return result;
}

function moveLetter(inputChar) {
    if (!ALPHABET.includes(inputChar.toUpperCase())) {
        throw new Error(`Input ${inputChar} was not recognized! Please use only letters (without polish special characters) and numbers.`);
    }

    return setCorrectResultCase(inputChar, ALPHABET[getHashCharIndex(inputChar)]);
}

function getHashCharIndex(inputChar) {
    let hashCharIndex = getInputCharIndex(inputChar) + SHIFT;
    if (hashCharIndex >= MAX_INDEX) {
        hashCharIndex = hashCharIndex % MAX_INDEX;
    }
    return hashCharIndex;
}

function getInputCharIndex(inputChar) {
    return ALPHABET.indexOf(inputChar.toUpperCase());
}

function setCorrectResultCase(inputChar, result) {
    return inputChar !== inputChar.toUpperCase() ? result.toLowerCase() : result;
}