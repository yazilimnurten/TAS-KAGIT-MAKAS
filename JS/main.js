/*SEÇİMLER YAPILIYOR */

let kagit = document.querySelector("#kagit");
let makas = document.querySelector("#makas");
let tas = document.querySelector("#tas");
let oyuncuSecim = document.querySelector("#oyuncu_secim");
let pcSecim = document.querySelector("#pc_secim");
let mesaj = document.querySelector(".mesaj");

/*SEÇİMLER YAPILDI */

let oyuncuSkor = 0;
let bilgisayarSkor = 0;

function bilgisayarSecimi() {
    let secim = ["tas", "kagit", "makas"];
    let rasgeleSecim = Math.floor(Math.random() * 3);
    // console.log(rasgeleSecim);
    pcSecim.setAttribute("src", `img/${secim[rasgeleSecim]}.png`);
    return secim[rasgeleSecim];
}
//bilgisayarSecimi()

function eventListeners() {
    tas.addEventListener("click", function () {
        oyuncuSecim.setAttribute("src", `img/tas.png`);
        let computersecim = bilgisayarSecimi()
        sonuc("tas", computersecim);
    });
    kagit.addEventListener("click", function () {
        oyuncuSecim.setAttribute("src", `img/kagit.png`);
        let computersecim = bilgisayarSecimi()
        sonuc("kagit", computersecim);
    })
    makas.addEventListener("click", function () {
        oyuncuSecim.setAttribute("src", `img/makas.png`);
        let computersecim = bilgisayarSecimi()
        sonuc("makas", computersecim);
    })

}
eventListeners()

// sonuc function

function sonuc(oyuncu, bilgisayar) {
    switch (oyuncu + bilgisayar) {
        case "tasmakas":
        case "kagittas":
        case "makaskagit":
            kazan();
            break;
        case "taskagit":
        case "kagitmakas":
        case "makastas":
            kaybet();
            break;
        case "tastas":
        case "kagitkagit":
        case "makasmakas":
            berabere();
            break;
        default: "HATAA";
    }
}

function kazan() {
    oyuncuSkor = oyuncuSkor + 1;
    mesaj.innerHTML = "Tebrikler kazandın :) ";

}

function kaybet(){
    bilgisayarSkor=bilgisayarSkor+1
    mesaj.innerHTML="Bilgisayar Kazandı :( ";

}

function berabere(){
    mesaj.innerHTML="BERABERE ---";
}