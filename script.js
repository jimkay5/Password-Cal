function updateSelectedLength(value){
    document.getElementById("selected-length").textContent = value;
}

function generatePassword(){
    var length = document.getElementById("length").value;
    var includeNumbers = document.getElementById("includeNumbers").checked;
    var includeLetters = document.getElementById("includeLetters").checked;
    var includeSymbols = document.getElementById("includeSymbols").checked;

    var charset = "";
    if (includeNumbers) {
        charset += "0123456789";
    }
    if (includeLetters) {
        charset += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeSymbols) {
        charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }
    if (charset === ""){
        alert("Please select at least one option.");
        return;
    }

    var password = "";

    for (var i = 0; i < length; i++){
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
    document.getElementById("password").textContent = password;
}
