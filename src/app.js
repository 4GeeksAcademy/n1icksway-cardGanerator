/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onload = function() {
  //write your code here
  button();
  cardGenerator();
};

function button() {
  document.querySelector(".btn").addEventListener("click", function() {
    cardGenerator();
  });
}
function cardGenerator() {
  const suits = ["♣", "♠", "♥", "♦"];
  const numbers = ["2", "4", "8", "10", "K", "Q", "J", "♞𓆗"];

  let randomSuits = suits[Math.floor(Math.random() * suits.length)];
  let randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];

  if (randomSuits === "♦" || randomSuits === "♥") {
    document.querySelector(".top").style.color = "red";
    document.querySelector(".bottom").style.color = "red";
  } else {
    document.querySelector(".top").style.color = "black";
    document.querySelector(".bottom").style.color = "black";
  }
  document.querySelector(".top").innerHTML = randomSuits;
  document.querySelector(".number").innerHTML = randomNumbers;
  document.querySelector(".bottom").innerHTML = randomSuits;
}
