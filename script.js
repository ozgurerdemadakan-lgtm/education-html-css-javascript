let sayi = 3;

if (sayi === 3) {
    console.log("sayi 3'e eşittir");
} else {
    console.log("sayi 3'e eşit değildir");
}



let isim ="Özgür Erdem Adakan";
console .log(isim);


let baslik = document.getElementById("job");
baslik.textContent = "Benim işim yazılım geliştirme";



let buton = document.getElementById("buton")



buton.addEventListener("click", function() {
    let baslik = document.getElementById("job");
    baslik.textContent = "Benim işim yazılım geliştirme ve web tasarım ";
});


let sayac = 0;
let arttirDugmmesi = document.getElementById("arttir");
let azaltDugmesi = document.getElementById("azalt");
let sayiYazisi = document.getElementById("sayi yazisi");

arttirDugmmesi.addEventListener("click", function() {
    sayac = sayac + 1;
    sayiYazisi.textContent = sayac;

});

azaltDugmesi.addEventListener("click", function() {
   if (sayac >= 0) {
    sayac = sayac - 1;
    sayiYazisi.textContent = sayac;
   }
});



let renkler = ["kırmızı", "mavi", "yeşil", "sarı"];

    console.log(renkler[0]);
    console.log(renkler[2]);
    console.log(renkler.length);


    for (let i = 0; i < renkler.length; i++) {
        console.log(renkler[i]);
    }



