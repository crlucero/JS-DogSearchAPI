
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dog } from "./dog.js";

let dogPic = new Dog();
let promise = dogPic.getDogBreedList();

promise.then(function(response) {
  let body = JSON.parse(response);
  let list = body.message;
  for(let breed in list){
    $("#breedlist").append(`<option value= "${breed}">${breed}</option>`);
  }

});

$(document).ready(function() {
    $('#breedname').submit(function() {
      event.preventDefault();
      let name = $("#breedlist").val();

      let dog = new Dog();
      let promise = dog.getDogImages(name);

      promise.then(function(response) {
        let body = JSON.parse(response);
        let image = new Image();
        image.src = body.message;
        document.getElementById("result").src = image.src;
      })
    });
    $('#random').submit(function() {
      event.preventDefault();

      let dog = new Dog();
      let promise = dog.getRandomDogImages();

      promise.then(function(response) {
        let body = JSON.parse(response);
        let image = new Image();
        image.src = body.message;
        document.getElementById("output").src = image.src;
      })
    });

      
   
  });