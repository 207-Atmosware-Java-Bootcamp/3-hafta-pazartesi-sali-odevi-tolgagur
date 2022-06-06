// [{}] {[]} için örnek kodlar

 

let arr = [
    { isim: 'Tolga', soyisim: 'Güreli' },
    { isim: 'Ahmet', soyisim: 'Ali' },
    { isim: 'Enes', soyisim: 'Mehmet' }];

console.log(arr);

console.log("Ad : " + arr[0].isim + " " +
            "Soyisim : " + arr[0].soyisim);


var person={
    "adı":"Tolga",
    "soyadı":"Güreli",
    "isLogin":true,
    "teknolojiler":["Java","SQL","Spring"]
  }; 

 
  
  function print(){
      var string = "";
      for (const tek of person.teknolojiler) {
          string = string+ " " + tek;
      }
      return string;
  } 
  console.log("Teknolojiler :" + print())

