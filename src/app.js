// Változók gyakorlása 2023-02-09

// var num1 = 37;
// num1 = 38; // hibás, állandó értékét nem lehet módosítani

// console.log(num1);


// if(num1 == 37){
//     var a = 35; // globális változó
//     let d = 47; // lokális változó - nem látszik blokkon kívül - blokkon belül érvényes (scope)
//     console.log(d);
// }


// var b = 37;

// console.log(a);

const num1Elem = document.querySelector("#num1");
const getButton = document.querySelector("#getButton");



getButton.addEventListener('click', () => {
    var szam = 3;
    szam = num1Elem.value;
    num1Elem.value = '';
    kiir(szam);
    vizsgalat(szam);
})

function vizsgalat(input){
    let egyezik = input.match(/^[0-9]+$/);
    if(egyezik){
        console.log("Egyezik");
    }else {
        console.log("NEM JÓ");
    }

    console.log(egyezik);

}

function kiir(szam){
    if(szam == 1){
        console.log("Egy");
    }else if(szam == 2){
        console.log("Kettő");
    }else if(szam == 3){
        console.log("Három");
    }else {
        console.log("Ismeretlen érték");    
    }
}

// console.log(window.width);
// console.log(window.height);  

console.error("ERROR, HIBA!");

const doboz1 = document.querySelector("#doboz1");
const startButton = document.querySelector("#startButton");

startButton.addEventListener('click', () => {
    doboz1.style.backgroundColor = 'gray';
    doboz1.style.animation = "anim1 10s";
});