function changeVocals (str) {
    //code di sini
    var strAfter ="";
    for(var i=0;i<str.length;i++){
      if(str[i]==="A"
      ||str[i]==="I" ||str[i]==="U" 
      ||str[i]==="E" ||str[i]==="O"
      ||str[i]==="a" ||str[i]==="i" 
      ||str[i]==="u" ||str[i]==="e"
      ||str[i]==="o"){
        if(str[i] === "z"){
          strAfter+=String.fromCharCode(str.charCodeAt(i)-25);
        }else if(str[i] ==="Z"){
          strAfter+=String.fromCharCode(str.charCodeAt(i)+25);
        }
        else{
          strAfter+=String.fromCharCode(str.charCodeAt(i)+1);
        }
      }else {
        strAfter+=str[i];
        
      }
    }
    return strAfter;
  }
  
  function reverseWord (str) {
    //code di sini
    var strAfter="";
    for(var i=str.length-1;i>=0;i--){
      strAfter+=str[i];
    }
    return strAfter;
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var strAfter=""
    for(var i=0;i<str.length;i++){
      if(str[i]===" "){
        strAfter+=str[i];
      }else{
        if(str.charCodeAt(i)<91 && str.charCodeAt(i) >64 ){
          strAfter+=String.fromCharCode(str.charCodeAt(i)+32);
        }else if(str.charCodeAt(i)<123 && str.charCodeAt(i) >96 ){
          strAfter+=String.fromCharCode(str.charCodeAt(i)-32)
        }
      }
      
    }
    return strAfter;
  }
  
  function removeSpaces (str) {
    //code di sini
    var strAfter=""
    for(var i=0;i<str.length;i++){
        if(str[i]!==" "){
          strAfter+=str[i];
        }
    }
    return strAfter;
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length<5)return "Minimal karakter yang diinputkan adalah 5 karakter"
    return setLowerUpperCase(reverseWord(removeSpaces(changeVocals(name))))
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'