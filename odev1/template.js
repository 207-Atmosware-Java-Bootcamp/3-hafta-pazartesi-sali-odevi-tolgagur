//ÖDEV: Math.round(Math.random()*10+1))
// bilgisayar tarafında rastgele  sayılar 1-10 arasında rastgele olsun oluştursun ve bitiş değeri 1<=X<=kullanıcı tarafından bitiş sayısına göre sayılar oluşturulsun
// bu sayıları bir diziye atama yapalım
// bu sayılardan ilk eleman  ===> dizi[0]
// bu sayılardan son eleman ===> dizi[dizi.length-1]
// bu sayıların küçükten büyüğe sıralama ===> dizi.sort()
// bu sayıların büyükten küçüğe sıralama ===> dizi.sort().reverse()
// bu sayıların toplamları  ===> sum=0  sum+=i;
// bu sayıların çift sayı toplamları  ===> if(dizi[i]%2==0)
// bu sayıların tek sayı toplamları  ===> if(dizi[i]%2==1)
// bu sayıların her birine 1 ekleyerek yeni bir dizi oluşturalım ==> iterative for ile her bir eleman erişmek ve 1 eklemek bunun dinamik kısmını ES kısmında göreceğiz.

//Not çıktılar console'da gösterilmektedir.


// kullanıcıdan sayı girmesinin beklendiği yer
var number= prompt("Dizi boyutunu giriniz.");

//while ile kullanıcının geçerli bir sayı girmesini sağlıyoruz
while(!(number>=0)){
    alert("0 dan büyük sayı giriniz");
    var number= prompt("Dizi boyutunu giriniz.");
}

//parteInt kendisine ondalıklı olarak verdiğiniz değerin ondalık kısmını siler ve kalan kısımdan yeni bir değişken oluşturarak döndürür.
number = parseInt(number);

//randomNumber fonksiyonu içerisinde istenilen görevleri gerçekleştirileceğı yer.
function randomNumber(){

    var arr = [];
    // dizi uzunluğu kadar random sayı üretir
    for (let i = 0; i < number; i++) {
         arr[i] = Math.floor(Math.random() * 10);
    }

    //oluşturulan dizinin ekrana yazdırılması
    console.log("OLuşturulan dizi : " + arr);

    //ilk eleman
    console.log("ilk eleman : " + arr[0]);
    //son eleman
    console.log("son eleman : " + arr[arr.length-1]);
    
    //küçükten büyüye sıralanması
    console.log("kücükten büyüye : " + arr.sort());
    //büyükten küçüğe doğru sıralanması 
    console.log("büyükten küçüğe : " + arr.sort().reverse());


    //sayıların toplanması
    var arrSum  = 0;
    for(sum of arr){
        arrSum = arrSum + sum;
    }
    console.log("Sayıların toplamı : " + arrSum);


    // çift sayı işlemleri
    var even = 0;
    for (const sum of arr) {
        if(sum % 2 === 0){
            even = even+sum;
        }
    }
    console.log("Cift sayıların toplamı : " + even);
    //tek sayı işlemleri
    var odd = 0;
    for (const sum of arr) {
        if(sum % 2 === 1){
            odd = odd+sum;
        }
    }
    console.log("Tek sayıların toplamı : " + odd);


    // dizi elemanlarının sonuna 1 eklenmesi not: string formatında 
    var newArr = [];
    for (const i in arr) {
        newArr[i] = arr[i].toString().concat("1");
    }

    // dizi elemanlarının 1 arttırılması işlemi
    for (const i in arr) {
        arr[i] = arr[i]+1;
    }

    console.log("yeni dizi : " + newArr);
    console.log(arr);
  }

  randomNumber();