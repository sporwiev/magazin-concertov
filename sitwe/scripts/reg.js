
function ButtonClickReg() {
        let name1 = document.getElementById('name1');
        let surname = document.getElementById('surname1');
        let pasport = document.getElementById('pasport');
        let phone = document.getElementById('phone');
        event.preventDefault();
        let zap = document.getElementById('zap');
        name1.innerText;
        let password = document.getElementById('password');
        let repeatpassword = document.getElementById('repeatpassword');
        if (password.value !== repeatpassword.value) {
            zap.textContent = "Пароли не совпадают"
        } else {
            zap.textContent = "Вы зарегестрированы: " + name1.value + " " + surname.value;
            let jsonS = JSON.stringify({
                "Name1": name1,
                "Surname": surname,
                "Password": password,
                "pasport": pasport,
                "phone": phone
            })


            window.location.href = '../html/privatecab.html';

        }

}
