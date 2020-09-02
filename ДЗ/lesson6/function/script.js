let content = document.querySelector("div.content"),
  create = document.querySelector("button.create"),
  clear = document.querySelector("button.clear"),
  input = document.querySelector("input#input");

create.addEventListener("click", function (event) {
  if (input.value != "") {
    let div = document.createElement("div"),
      button1 = document.createElement("button"),
      submit = document.createElement("input"),
      span = document.createElement("span"),
      button2 = document.createElement("button");

    submit.type = "checkbox";

    div.appendChild(submit);

    span.textContent = input.value;
    input.value = "";
    div.appendChild(span);
    button1.textContent = "✘";
    button2.textContent = "✎";
    button1.classList.add("delete");
    button2.classList.add("change");
    div.appendChild(button1);
    div.appendChild(button2);

    div.addEventListener("click", clickElement);
    content.appendChild(div);
  } else {
    alert("Введите имя листа");
  }
});

clear.addEventListener("click", function (event) {
  let deletes = confirm("Вы точно хотите очистить лист?");
  if (deletes) {
    let elements = content.querySelectorAll("div");
    for (let element of elements) content.removeChild(element);
  }
});

function clickElement(event) {
  let click = this;
  if (event.target == click.querySelector("button.delete")) {
    let div = content.querySelector(`div.${click.querySelector("span").textContent}`);
    if (div)
      content.removeChild(div);
    content.removeChild(click);
  } else if (event.target == click.querySelector("button.change")) {
    let div = document.createElement("div"),
      input = document.createElement("input"),
      button1 = document.createElement("button"),
      button2 = document.createElement("button");
    input.type = "text";
    input.placeholder = this.querySelector("span").textContent;
    button1.type = "button";
    button2.type = "button";
    button1.textContent = "✘";
    button2.textContent = "✓";
    div.appendChild(input);

    button1.addEventListener("click", function (event) {
      content.removeChild(div);
    });

    button2.addEventListener("click", function (event) {
      if (input.value != "") {
        let span = click.querySelector("span");
        span.textContent = input.value;
        content.removeChild(div);
      } else {
        alert("Заполните поля для изменения");
      }
    });
    div.appendChild(button1);
    div.appendChild(button2);
    div.classList.add(this.querySelector("span").textContent);
    content.insertBefore(div, click);
  } else if (event.target == click.querySelector("input")) {
    if (click.style.textDecoration != "line-through")
      click.style.textDecoration = "line-through";
    else click.style.textDecoration = "";
  }
}
