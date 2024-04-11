let Form = document.createElement("form");
let Glav = document.getElementById("glav");
function addClient() {

    let P;
    let P1;
    let P2;
    let P3;
    let Input;
    let Input1;
    let Input2;
    let Input3;
    let Label;
    let Label1;
    let Label2;
    let Label3;
    let h3;

    let Glav = document.getElementById("glav");
        h3 = document.createElement("h3");
        P = document.createElement("p");
        P1 = document.createElement("p");
        P2 = document.createElement("p");
        P3 = document.createElement("p");
        Label = document.createElement("label");
        Label1 = document.createElement("label");
        Label2 = document.createElement("label");
        Label3 = document.createElement("label");
        Input = document.createElement("input");
        Input1 = document.createElement("input");
        Input2 = document.createElement("input");
        Input3 = document.createElement("input");
        h3.innerHTML = "Данные о клиенте";
        Form.appendChild(h3);
        Form.className = "tickets";
        Label.innerHTML = "Имя";
        Glav.appendChild(Form);
        Form.appendChild(P);
        P.appendChild(Label);
        Label.appendChild(Input)
    Label1.innerHTML += "Фамилия";
        Form.appendChild(P1);
        P1.appendChild(Label1);
        Label1.appendChild(Input1);
    Label2.innerHTML += "Дата-рождения";
        Form.appendChild(P2);
        P2.appendChild(Label2);
        Label2.appendChild(Input2);
    Label3.innerHTML += "Номер документа";
        Form.appendChild(P3);
        P3.appendChild(Label3);
        Label3.appendChild(Input3);

    
}
function  checkout(){
    window.location.href = "../html/order_managment.html";
}
window.onload = function (){
    let numberTickets = document.getElementById('numberTickets');
    let numberTicketsGet = localStorage.getItem('numberTicket');
    let siti = ['Санкт-Петербург','Москва','Саратов','Екатеринбург','Петрозаводск','Новосибирск','Казань','Нижний Новгород','Челябинск','Саратов','Ростов-на-Дону'];
    let rand = Math.floor(Math.random() * siti.length);
    let Siti = document.getElementById('sity');
    let nameConcert = document.getElementById('nameConcert');
    let dateConcert = document.getElementById('dateConcert');
    let timeConcert = document.getElementById('timeConcert');
    let startTime = document.getElementById('startTimeConcert');
    let endTime = document.getElementById('endTimeConcert');
    let priceCon = document.getElementById('price');
    numberTickets.textContent = numberTicketsGet;
    Siti.textContent = ': ' + siti[rand];
    nameConcert.textContent = localStorage.getItem('nameTicket');
    dateConcert.textContent = localStorage.getItem('date');
    timeConcert.textContent = localStorage.getItem('timeTicket');
    startTime.textContent = localStorage.getItem('timeFirst');
    endTime.textContent = localStorage.getItem('timeSecond');
    priceCon.textContent = localStorage.getItem('priceTicket');




}
