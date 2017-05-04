







function PasswordMessage(m){
  this.name="Password M3SS7GE(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧";
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
            throw new PasswordMessage("┌( ಠ_ಠ)┘Your password is too short. Should be at least 8 letters.");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Ｏ(≧▽≦)ＯYour password is too long. Should be at most 20 letters.");
        }
        else{
            throw new PasswordMessage("〜(￣▽￣〜)(〜￣▽￣)〜Your password is within the spectrum.");
        }
    }
    catch(e){
        console.log(e.name+"( ͡° ͜ʖ ͡°) "+e.message);
        return valid;
    }
}


exports.containsUpper =function(str){
  let hasUpper = false;
    try{
      for(let x=0; x<str.length,x++){
        if(inRange(str[x],65,90)==true){
          hasUpper = true;
          throw new PasswordMessage("( ͡° ͜ʖ ͡°)WHAT IS LIFE IN CAPITALS.");
        }
      }
      if(hasUpper = false){
        throw new PasswordMessage("( ͡° ͜ʖ ͡°)What are you doing with your life, its lowercase.");
    }
  }
}



exports.containsLower =function(str){
let haslower=false
try {
  for(let x=0;x < str.length;x++){
    if(inRange[x](str[x],97,122)==true){
      hasLower=true
      throw new PasswordMessage("＼(^-^)／Take The L")
    }
  }
  if (hasUpper=false) {
    throw new  PasswordMessage("(ノÒ益Ó)ノ彡▔▔No Uppercase letters bud")
  }

} catch (e) {

} finally {

}
}


exports.containsNumerical =function(str){
  let hasnumber=false;
  try {
    for (var i = 0; i < str.length; i++) {
      if (inRange(str[i],48,57)) {
        hasnumber=true
        throw new PasswordMessage ("A Number is REQUIRED good sir!")
      }
    }
    if (hasnumber==false)
    throw new  PasswordMessage("YOU HAVE NO NUMBAHHH!") {
    }
  } catch (e) {
    console.log(e.name+":"+e.message);
    return hasnumber
  }
}

exports.containsSpecial =function(str){
specialcharcter=false
let special =[33,64,35,36,37,94,38,42]
try {
  for (var i = 0; i < str.length; i++) {
    str[i]
    if (str[x].charCodeAt(0)==special[i]) {
      specialcharcter=true
      throw new PasswordMessage=("Special Charcter For The Very Special Passw0rds(づ｡◕‿‿◕｡)づ")
    }
  }
} catch (e) {

} finally {

}

}
