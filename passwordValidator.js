function isValid(password){
    if (password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password)){
        return true;
    }
    else{
        return false;
    }
}
module.exports = isValid;