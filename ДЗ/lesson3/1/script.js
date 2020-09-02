//1
function testMessges1() {
    let age = prompt("Сколько вам лет?");
    if (Number(age) >= 14 && Number(age) <= 90) {
        
        console.log(Number(age));
        cycle = false;
        alert("Доступ разрешен");
    }
    else {

        alert("Доступ закрыт");
    }     
}
testMessges1();



//2
let name = prompt("Кто вы?");

if (name == null) {
    alert("Отмена");
}
else if (name == "Админ") {
    let password = prompt("Пароль");
    
    if (password == null) {
        alert("Отмена");
    } else if (password == "Черный Властелин") {
        alert("Добро пожаловать");
    }
    else {
        alert("Пароль неверен");
    }
} else {
    alert("Я вас не знаю");
}




//3
function testMessges3() {
    //Вход в цикл
    do {
        let age = prompt("Сколько вам лет?");

        //Проверка на нажатия Отмена
        if (age == null) {
            alert("Доступ закрыт");
            return null;
        }
        //Нажатия кнопки Отмена не было
        else {
            
            age = parseInt(age);
            //Число равно в границах 14 - 90
            if (age >= 14 && age <= 90) {
                alert("Доступ разрешен");
                return age;
            }
            //Если число больше 100
            else if (age > 100) {
                alert("Доступ закрыт");
                return null;
            }
            //Все остальние случаии
            else {
                alert("Доступ закрыт");
            }
        }
    } while (true);
}

//Запуск функции
let age = testMessges3();
