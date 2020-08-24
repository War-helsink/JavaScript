
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    
    function inputValue() {
        return new Promise(function (resolve,reject) {
            let request = new XMLHttpRequest();

            request.open('GET', 'http://localhost/js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();
        
            request.addEventListener('readystatechange', function () {
                if (request.readyState === 4 && request.status == 200) {
                    resolve();
                } else {
                    reject();
                }
            });
        });  
    }
    inputValue()
        .then(()=>{ let data = JSON.parse(request.response);
            inputUsd.value = inputRub.value / data.usd;})
        .catch(()=>{ inputUsd.value = "Что-то пошло не так!";})

});