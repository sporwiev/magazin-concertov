
function ButtonClick4() {
    window.location.href = '../index.html';

}
window.onload = function () {

    let NT = document.getElementById("numberTicket");
    let NC = document.getElementById("nameConcert");
    let DC = document.getElementById("dateConcert");
    let TS = document.getElementById("timeSecond");
    let TF = document.getElementById("timeFirst");
    let nt = Randomes(10, 100);
    NT.textContent = Math.floor(nt).toString();
    window.localStorage.setItem('numberTicket',nt.value);
    let PC = document.getElementById("priceConcert");
    let pc = Randomes(100, 500);
    PC.textContent = Math.floor(pc).toString();
    window.localStorage.setItem('priceTicket',PC.value);
    let consertTr = ["Симфония мгновений", "Полотно звездных воспониманий", "Лесной поход", "Яшмовый путь", "Жить одним днем", "Затерянные богатства"];
    let rand = Math.floor(Math.random() * consertTr.length);
    NC.textContent = consertTr[rand];
    NT.textContent = Math.floor(nt).toString();
    let tio = document.getElementById("kolBou");
    let too = pc / 100 * 6;
    tio.textContent = Math.ceil(too.toString());
    let myDate  = randomDate(new Date(2022, 0, 1), new Date());
    let myDatefirst  = randomDatefirst(new Date(2022, 0, 1), new Date());
    DC.textContent = (myDate.getFullYear() + '-'
        + ('0' + (myDate.getMonth() + 1)).slice(-2)
        + '-' + ('0' + myDate.getDate()).slice(-2));
    TS.textContent = ('0' + myDate.getHours()).slice(-2)
        + ':' + ('0' + myDate.getMinutes()).slice(-2)
        + ':' + ('0' + myDate.getSeconds()).slice(-2);
    TF.textContent = ('0' + myDatefirst.getHours()).slice(-2)
        + ':' + ('0' + myDatefirst.getMinutes()).slice(-2)
        + ':' + ('0' + myDatefirst.getSeconds()).slice(-2);
    let DL = myDatefirst.getHours() - myDate.getHours();
    let DL1 = document.getElementById("timeConcert");
    DL1.textContent = Math.abs(DL);
    let ST = document.getElementById("priceConcert");


    window.localStorage.setItem('timeTicket',DL1.value);
    window.localStorage.setItem('date',DC.value);
    window.localStorage.setItem('timeSecond',TS.value);
    window.localStorage.setItem('timeFirst',TF.value);
    window.localStorage.setItem('Kolbou',tio.value);

}
function randomDate(start, end) {
    return new Date(start.getTime()
        + Math.random() * (end.getTime() - start.getTime()));
}
function randomDatefirst(start, end) {
    return new Date(start.getTime()
        + Math.random() * (end.getTime() - start.getTime()));
}


function Randomes(a, b){
    return Math.random() * (a + b - a + Math.pow(a,2)) - 10;
}









