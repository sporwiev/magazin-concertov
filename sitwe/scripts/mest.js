window.onload = function () {
    let Childw = document.getElementsByClassName('TR')[0];
    let result = document.getElementById('resultat');
    let resultmest = document.getElementById('resultat1');
    let divElem;
    let divMest;
    let divTitle;


    for (let i = 1; i < 78; i++) {
        divElem = document.createElement('button');
        divTitle = document.createElement('span');
        divTitle.className = 'formest1';
        divElem.className = 'forrad';
        divElem.innerHTML = i.toString();
        Childw.appendChild(divElem);
        divElem.appendChild(divTitle);
        divElem.onmousemove = function (event){
            result.textContent = i.toString() + " ряд ";
        }



        for( let j = 1;j < 101;j++){
            divMest = document.createElement('button');
            divMest.innerHTML = j.toString();
            divMest.className = 'forrad1';
            divTitle.appendChild(divMest);
            divMest.onclick = function (event){
                 resultmest.textContent = j.toString() + " место ";



            }
        }



    }


}
onclick(function (){

});



