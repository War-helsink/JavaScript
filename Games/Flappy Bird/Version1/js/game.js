let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let bird = new Image();
let bg = new Image(); // Создание объекта
let fg = new Image(); // Создание объекта
let pipeUp = new Image(); // Создание объекта
let pipeBottom = new Image(); // Создание объекта

bird.src = "img/bird.png"; // Указание нужного изображения
bg.src = "img/bg.png"; // Аналогично
fg.src = "img/fg.png"; // Аналогично
pipeUp.src = "img/pipeUp.png"; // Аналогично
pipeBottom.src = "img/pipeBottom.png"; // Аналогично

// Звуковые файлы
let fly = new Audio(); // Создание аудио объекта
let score_audio = new Audio(); // Создание аудио объекта

fly.src = "audio/fly.mp3"; // Указание нужной записи
score_audio.src = "audio/score.mp3"; // Аналогично


let score = 0;
let gap = 100;
let xPos = 10;
let yPos = 150;
let grav = 2;

let pipe = [];
pipe.push({
  x: cvs.width,
  y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height,
});

// При нажатии на какую-либо кнопку
document.addEventListener("keydown", moveUp);
// Вызывается метод someMethod

function moveUp(event) {
    if (event.key === " ")
        yPos -= 40;
    fly.play();

  // Изменяем что-то в коде
}

function draw() {
  ctx.drawImage(bg, 0, 0);

  for (let obgect of pipe) {
    ctx.drawImage(pipeUp, obgect.x, obgect.y);
    ctx.drawImage(pipeBottom, obgect.x, obgect.y + pipeUp.height + gap);
    obgect.x--;
    if (obgect.x == 100) {
      pipe.push({
        x: cvs.width,
        y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height,
      });
    }
    if (
      (xPos + bird.width >= obgect.x &&
        xPos <= obgect.x + pipeUp.width &&
        (yPos <= obgect.y + pipeUp.height ||
          yPos + bird.height >= obgect.y + pipeUp.height + gap)) ||
      yPos + bird.height >= cvs.height - fg.height
    ) {
      location.reload(); // Перезагрузка страницы
    }
    if(obgect.x == 5) {
        score++;
        score_audio.play();
        }
      
      
      
      
    if (obgect.x == -50) {
      pipe.shift();
    }
  }

  
    
    
  // Отслеживание прикосновений

  ctx.drawImage(fg, 0, cvs.height - fg.height);
  ctx.drawImage(bird, xPos, yPos);
  yPos += grav;

    
    
    
    
    
    
  ctx.fillStyle = "#000";
  ctx.font = "24px Verdana";
  ctx.fillText("Счет: " + score, 10, cvs.height - 20);
    
    
    
    
  // Какой-либо код
  requestAnimationFrame(draw); // Вызов функции постоянно
}

pipeBottom.onload = draw;