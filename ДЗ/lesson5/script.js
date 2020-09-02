//First class
class CreateTrees1 {
  constructor(block) {
    this.block = block;
    this.div = document.createElement("div");
    this.div.classList.add("container");
    this.block.appendChild(this.div);
    this.ul = document.createElement("ul");
    this.div.appendChild(this.ul);
    this.list = [];
  }

  design(list, number) {
    let cycle = true,
      i = 0;

    do {
      let a = prompt(number + ":Какой список создать?");
      if (a == undefined || a === "") {
        cycle = false;
      } else {
        let li = document.createElement("li");
        li.textContent = a;
        li.style.margin = "0 " + number * 20 + "px";
        list.push({
          name: li,
          child: [],
          tree: "tree" + number,
        });
        this.design(list[i].child, number + 1);
      }

      i++;
    } while (cycle);
  }

  createTree(list) {
    for (let element of list) {
      element.name.textContent =
        element.name.textContent + " [" + element.child.length + "]";
      element.name.classList.add(element.tree);
      this.ul.appendChild(element.name);
      if (element.child.length != 0) this.createTree(element.child);
    }
  }
  run() {
    this.design(this.list, 0);
    this.createTree(this.list);
  }
}




//Second class
class CreateTrees2 {
  constructor(block) {
    this.block = block;
    this.div = document.createElement("div");
    this.div.classList.add("container");
    this.block.appendChild(this.div);
    this.ul = document.createElement("ul");
    this.div.appendChild(this.ul);
    this.list = {
      length: 0
    };
  }

  design(list, name) {
    let cycle = true,
      i = 0;
    do {
      let a = prompt(`${name}:Какой список создать?`);
      if (a == undefined || a === "") {
        cycle = false;
      }
      else {
        list[a] = {
          length: 0
        };
        list.length++;
        this.design(list[a], a);
      }
      i++;
    } while (cycle);
  }

  createTree(list, element) {
    if (list.length != 0) {
      for (let key in list) {
        if (key == "length") {
        }
        else if (list[key].length != 0) {
          let li = document.createElement("li"),
            ul = document.createElement("ul");
          li.textContent = `${key} [${list[key].length }]`;
          li.appendChild(ul);
          element.appendChild(li);
          this.createTree(list[key], ul);
        }
        else {
          let li = document.createElement("li");
          li.textContent =  `${key} [${list[key].length }]`;
          element.appendChild(li);
        }
      }
    }
  }

  run() {
    this.design(this.list, 0);
    this.createTree(this.list, this.ul);
  }
}


//Third class
class CreateTrees3 {
  constructor(block) {
    this.block = block;
    this.div = document.createElement("div");
    this.div.classList.add("container");
    this.block.appendChild(this.div);
    this.ul = document.createElement("ul");
    this.div.appendChild(this.ul);
    this.list = {
        Рыбы: {
          Форель: {},
          Щука: {},
        },
        Деревья: {
          Хвойные: {
            Лиственница: {},
            Ель: {},
          },
          Цветковые: {
            Берёза: {},
            Тополь: {},
          },
        },
    };
    
  }


  createTree(list, element) {
    if (list.length != 0) {
      for (let key in list) {
        if (list[key].length != 0) {
          let li = document.createElement("li"),
            ul = document.createElement("ul");
          li.textContent = key;
          li.appendChild(ul);
          element.appendChild(li);
          this.createTree(list[key], ul);
        }
        else {
          let li = document.createElement("li");
          li.textContent = key;
          element.appendChild(li);
        }
      }
    }
  }
  run() {
    this.createTree(this.list, this.ul);
  }
}


let tree = new CreateTrees3(document.querySelector("header.header"));
tree.run();
