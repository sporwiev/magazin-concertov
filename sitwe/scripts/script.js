let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {

    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item");

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";
}
let kolvo = document.getElementById("kolv") ;
let result = document.getElementById("result");
function ButtonClick(){
    event.preventDefault();
    let kolvoval = kolvo.value;
    let t = kolvoval * 1200;
    result.textContent = t + " руб";
}
function LocOders(){
    window.location = "order.html";
}

function ButtonClick3(){
    let mai = document.getElementById("emaill")
    let resultt = document.getElementById("result3");
    let name = document.getElementById("namee");
 let name1 = name.value;
    resultt.textContent = name1 + ",вы записаны почта: " + mai;
    window.location.href = "../html/search.html";
}
function ButtonClick1(){
    let NT = document.getElementById("numberTicket");
    let nt = Randomes();
    NT.textContent = "руг";
    let NC = document.getElementById("nameConcert");
}
function ButtonClickmest(){
    window.location.href = 'html/Ticket.html';
    let vvod = document.getElementById("formest");
    let div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = "black";

}





