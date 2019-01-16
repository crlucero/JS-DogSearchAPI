
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dog } from "./dog.js";

$(document).ready(function() {
    $('#breedname').submit(function() {
      event.preventDefault();
      let name = $('#name').val();
      $('#name').val("");

      let dog = new Dog();
      let promise = dog.getDogImages(name);

      promise.then(function(response) {
        let body = JSON.parse(response);
        let image = new Image();
        image.src = body.message;
        document.getElementById("result").src = image.src;
      })
    });
  });