class FlappyBird {
  constructor() {
    this.cvs = document.getElementById("canvas");
    this.ctx = this.cvs.getContext("2d");

    this.bird = new Image();
    this.bg = new Image(); // Создание объекта
    this.fg = new Image(); // Создание объекта
    this.pipeUp = new Image(); // Создание объекта
    this.pipeBottom = new Image(); // Создание объекта

    this.bird.src = "img/bird.png"; // Указание нужного изображения
    this.bg.src = "img/bg.png"; // Аналогично
    this.fg.src = "img/fg.png"; // Аналогично
    this.pipeUp.src = "img/pipeUp.png"; // Аналогично
    this.pipeBottom.src = "img/pipeBottom.png"; // Аналогично

    // Звуковые файлы
    this.fly = new Audio(); // Создание аудио объекта
    this.score_audio = new Audio(); // Создание аудио объекта

    this.fly.src = "audio/fly.mp3"; // Указание нужной записи
    this.score_audio.src = "audio/score.mp3"; // Аналогично

    this.score = 0;
    this.gap = 100;
    this.xPos = 10;
    this.yPos = 150;
    this.grav = 2;

    this.pipe = [];
    this.pipe.push({
      x: this.cvs.width,
      y: Math.floor(Math.random() * this.pipeUp.height) - this.pipeUp.height,
    });

    // Вызывается метод moveUp
    document.addEventListener("keydown", (e) => this.moveUp(e));
    
    this.pipeBottom.onload = () => this.draw();
  }

  moveUp(event) {
    if (event.key === " "){
        this.yPos -= 40;
        this.fly.play();
    }
  }


  draw() {
    this.ctx.drawImage(this.bg, 0, 0);
  
    for (let obgect of this.pipe) {
      this.ctx.drawImage(this.pipeUp, obgect.x, obgect.y);
      this.ctx.drawImage(this.pipeBottom, obgect.x, obgect.y + this.pipeUp.height + this.gap);
      obgect.x--;
      if (obgect.x == 100) {
        this.pipe.push({
          x: this.cvs.width,
          y: Math.floor(Math.random() * this.pipeUp.height) - this.pipeUp.height,
        });
      }
      if (
        (this.xPos + this.bird.width >= obgect.x &&
          this.xPos <= obgect.x + this.pipeUp.width &&
          (this.yPos <= obgect.y + this.pipeUp.height ||
            this.yPos + this.bird.height >= obgect.y + this.pipeUp.height + this.gap)) ||
            this.yPos + this.bird.height >= this.cvs.height - this.fg.height
      ) {
        location.reload(); // Перезагрузка страницы
      }
      if (obgect.x == 5) {
        this.score++;
        this.score_audio.play();
      }
  
      if (obgect.x == -50) {
        this.pipe.shift();
      }
    }
  
    // Отслеживание прикосновений
  
    this.ctx.drawImage(this.fg, 0, this.cvs.height - this.fg.height);
    this.ctx.drawImage(this.bird, this.xPos, this.yPos);
    this.yPos += this.grav;
  
    this.ctx.fillStyle = "#000";
    this.ctx.font = "24px Verdana";
    this.ctx.fillText("Счет: " + this.score, 10, this.cvs.height - 20);
  
    // Какой-либо код
    requestAnimationFrame(()=>this.draw()); // Вызов функции постоянно
  }
}

new FlappyBird();