const passwordLength = 12;
const includeUppercase = true;
const includeLowercase = true;
const includeNumbers = true;
const includeSymbols = true;

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+{}:/";

    let randomIndex = 0;
    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0) {
        return `(Password length should be at least 1)`;
    }
    if (allowedChars.length === 0) {
        return `(At least 1 set of characters should be selected)`;
    }

    for (let i = 0; i < length; i++) {
        randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const password = generatePassword(
    passwordLength,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols
);
console.log(`Generated password: ${password}`);
