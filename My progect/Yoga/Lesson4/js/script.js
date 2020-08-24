window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  let btn = document.querySelector("div.info-header"),
    tab = document.querySelectorAll("div.info-header-tab"),
    tabContent = document.querySelectorAll("div.info-tabcontent");
  
  hideTabContent(1);
  
  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
    for (let i = 0; i < a - 1; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }
  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
    }
    

    
  btn.addEventListener("click", function (event) {
    let target = event.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(i + 1);
          showTabContent(i);
          break;
        }
      }
    }
  });


  //Timer 
  let deadline = '2020-9-1';
  
  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000 % 60)),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)));
    return {
      'total':t,
      'seconds': seconds,
      'minutes': minutes,
      'hours':hours,
    };
  }
  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);
    
    function updateClock() {
      let t = getTimeRemaining(endtime);
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;
      if (t.total<= 0) {
        clearInterval(timeInterval);        
      }
    }

  }
  setClock('timer', deadline);




  //Modal
  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');
  
  more.addEventListener("click", function (event) {
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    this.classList.add('more-splash');
  });
  close.addEventListener("click", function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });



  //Form
  let messges = {
    'loading': 'Загрузка...',
    'success': 'Спасибо! Скоро мы с вами свяжемся!',
    'failure':'Что-то пошло не так...'
  };
  let form = document.querySelector('.main-form'),
    input = form.querySelectorAll('input'),
    stateMessage = document.createElement('div');
  
  stateMessage.classList.add('status');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.appendChild(stateMessage);
    let request = new XMLHttpRequest();
    request.open('POST', '/server.php');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    let formData = new FormData(form);
    let obj = {};
    formData.forEach(function (value, key) {
      obj[key] = value;
    });
    let json = JSON.stringify(obj);
    
    request.send(json);
    
    request.addEventListener('readystatechange', function () {
      if (request.readyState < 4) {
        stateMessage.innerHTML = messges.loading;
      }
      else if (request.readyState == 4 && request.status == 200) {
        stateMessage.innerHTML = messges.success;
      }
      else {
        stateMessage.innerHTML = messges.failure;
      }
    });

    for (let i = 0; i < input.length; i++){
      input[i].value = '';
    }


  });

});
