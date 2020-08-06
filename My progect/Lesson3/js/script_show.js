window.addEventListener("DOMContentLoaded", function () {
    
    let age = document.getElementById('age');
    value = age.value;
    function showUser(surname, name) {
        alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    }
    showUser("Test","Text");
});