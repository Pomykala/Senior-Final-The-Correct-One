







function PasswordMessage(m){
  this.name="Password Message";
  this.message=m;
}

function inRange(char,min,max){
    let unicode = char.charCodeAt(0);
    if(unicode >= min && unicode <= max){
      return true;
    }
    else{
      return false;
    }
}

exports.checkLength = function(str){
    let valid = (str.length >= 8 && str.length <= 20);
    try{
        if(str.length < 8){
            throw new PasswordMessage("Your password is too short. Should be at least 8 letters.");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Your password is too long. Should be at most 20 letters.");
        }
        else{
            throw new PasswordMessage("Your password is within the spectrum.");
        }
    }
    catch(e){
        console.log(e.name+"Deadass B "+e.message);
        return valid;
    }
}


exports.containsUpper =function(str){
  let hasUpper = false;
    try{
      for(let x = 0; x < str.length, x++){
        if(inRange(str[x], 65, 90)==true){
          hasUpper = true;
          throw new PasswordMessage("WHAT IS LIFE IN CAPITALS.");
        }
      }
      if(hasUpper = false){
        throw new PasswordMessage("What are you doing with your life lowercase scum.");
    }
  }
}



exports.containsLower =function(str){

}


exports.containsNumerical =function(str){

}


exports.containsSpecial =function(str){

}
