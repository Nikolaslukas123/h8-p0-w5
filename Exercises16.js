function totalDigitRekursif(angka) {
    // you can only write your code here!
    var strTemporary=angka.toString();
    if(strTemporary.length>1){
        return parseInt(strTemporary[0])+
        parseInt(totalDigitRekursif(parseInt(strTemporary.slice(1,strTemporary.length))));
    }else return angka;
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5