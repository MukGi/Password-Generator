const passwordLength = 12;
const includeUppercase = true;
const includeLowercase = true;
const includeNumbers = true;
const includeSymbols = true;
const btn = document.getElementById("genBtn");
const copy = document.getElementById("copy")
let showPass = document.getElementById("displayText");


function generatePassword(length,includeUppercase,includeLowercase,includeNumbers,includeSymbols){

    const lowercaseChars = " abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars ="!@#$%^&*()_+{}:/";

    let randomIndex=0;
    let allowedChars="";
    let password="";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return `(Password length should be at least 1)`;

    }
    if (allowedChars.length===0){
        return `(At least 1 set of character should be selected)`;

    }

    for (let i = 0; i < length; i++) {
        randomIndex = Math.floor(Math.random()*allowedChars.length);
        password += allowedChars[randomIndex];

    }

    
    return password;
}


btn.onclick = ()=>{
    password = generatePassword(passwordLength,
        includeUppercase,
        includeLowercase,
        includeNumbers,
        includeSymbols)
    showPass.textContent = password;
    showPass.style.opacity = 100;
}

// copy.onclick = ()=>{
//     showPass.select();
//     showPass.setSelectionRange(0, 99999);
//     navigator.clipboard.writeText(showPass.value)
//     console.log('clicked')
// }


