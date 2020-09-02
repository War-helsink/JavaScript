class Form {
    constructor() {
      this.messges = {
        loading: "Загрузка...",
        success: "Спасибо! Скоро мы с вами свяжемся!",
        failure: "Что-то пошло не так...",
      };
      this.form = document.querySelector(".main-form");
      this.input = this.form.querySelectorAll("input");
      this.stateMessage = document.createElement("div");
      this.stateMessage.classList.add("status");
      this.sendForm()
        .then(() => {
          this.stateMessage.innerHTML = this.messges.loading;
        })
        .then(() => {
          this.stateMessage.innerHTML = this.messges.success;
          this.clearInput();
        })
        .catch(() => {
          this.stateMessage.innerHTML = this.messges.failure;
          this.clearInput();
        });
    }
    sendForm() {
      return new Promise((resolve, reject) => {
        this.form.addEventListener("submit", (event) => {
          event.preventDefault();
          this.form.appendChild(this.stateMessage);

          this.request = new XMLHttpRequest();
          this.request.open("POST", "/server.php");
          this.request.setRequestHeader(
            "Content-type",
            "application/json; charset=utf-8"
          );
          let formData = new FormData(this.form);
          let obj = {};
          formData.forEach(function (value, key) {
            obj[key] = value;
          });

          let json = JSON.stringify(obj);
          this.request.send(json);

          this.request.addEventListener("readystatechange", () => {
            if (this.request.readyState < 4) {
              resolve();
            } else if (
              this.request.readyState == 4 &&
              this.request.status == 200
            ) {
              resolve();
            } else {
              reject();
            }
          });
        });
      });
    }
    clearInput() {
      for (let i = 0; i < this.input.length; i++) {
        this.input[i].value = "";
      }
    }
}
  
module.exports = Form;