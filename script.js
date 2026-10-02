let isim ="Özgür Erdem Adakan";
console .log("isim");


let baslik = document.getElementById("job");
baslik.textContent = "Benim işim yazılım geliştirme";



let buton = document.getElementById("buton")



buton.addEventListener("click", function() {
    let baslik = document.getElementById("job");
    baslik.textContent = "Benim işim yazılım geliştirme ve web tasarım ";
});