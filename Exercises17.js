
function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var strTemporary = angka.toString();
    var hasilDariPerkalian= parseInt(strTemporary[0]);
    if(strTemporary.length!==1){
        for(var i=1;i<strTemporary.length;i++){
            hasilDariPerkalian *= parseInt(strTemporary[i]);
        }
        if(hasilDariPerkalian.toString().length!==1)return kaliTerusRekursif(hasilDariPerkalian);
    }
    return hasilDariPerkalian;
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6