function isPasswordLongEnought(password){
    if (password.length >= 8){
        return true;
    }
    else{
        return false;
    }
}

//Tests
function testUnitaire(stepPassed){
    if (!isPasswordLongEnought("adfe")){
        stepPassed++;
        
    }
    if(isPasswordLongEnought('azertyui')){
        stepPassed++;
        
    }
    if (isPasswordLongEnought("aaaaaaaaaaaaaaaaa")){
        stepPassed++;
    }
    if (stepPassed<3){
        console.log("tests failed", "step passed =",stepPassed);
    }
    else{
        console.log("all tests passed");
        
    }
} 

testUnitaire(0);

