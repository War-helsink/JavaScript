window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  let clac = require('./parts/clac.js'),
    form = require('./parts/form.js'),
    modal = require('./parts/modal.js'),
    slider = require('./parts/slider.js'),
    tabs = require('./parts/tabs.js'),
    timer = require('./parts/tabs.js');


  
  new tabs();
  new timer("timer", "2020-9-1");
  new modal();
  new form();
  new slider();
  new clac();
});