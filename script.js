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