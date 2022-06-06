//Kullanıcıdan aldığımız verinin ilk harfi ve son harfi görünsün geriye kalan karakter
// kadar * (yıldız) olsun ==> Alınan örneğin Hamit  ==>  H***t
//Yardımcı oalcak metotlar v.s function
//string ==> replace,sub,String,charAt()
//loop


var str = prompt("Adınızı giriniz.");

//while ile kullanıcının geçerli bir veri girmesini sağlıyoruz
while(!(str.length>2)){
    alert("2 den çok karakter olmalı");
    var str= prompt("adınızı giriniz.");
}

//kısıtlama kontrolleri
function valid() { 
    var strSec = "";

    for (let i = 0; i < str.length-2; i++) {
        strSec = strSec.concat("*")  ;     
    }

    return (str[0].toLocaleUpperCase() + strSec + str[str.length-1]); 
 }

 document.write("Gizlenen veri : " + valid());
 console.log("test : "  + str);