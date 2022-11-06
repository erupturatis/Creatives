"use strict";
import { setRadius, setEase } from "./script.js";

let radiusInputSlider = document.getElementById("radiusSlider");
let radiusInputText = document.getElementById("radiusInput");

radiusInputText.addEventListener("change", () => {
  radiusInputSlider.value = parseInt(radiusInputText.value);
  setRadius(radiusInputSlider.value);
});

radiusInputSlider.addEventListener("change", () => {
  radiusInputText.value = radiusInputSlider.value;
  setRadius(radiusInputSlider.value);
});

let easeInputSlider = document.getElementById("easeSlider");
let easeInputText = document.getElementById("easeInput");

easeInputText.addEventListener("change", () => {
  easeInputSlider.value = parseFloat(easeInputText.value);
  setEase(easeInputSlider.value);
});

easeInputSlider.addEventListener("change", () => {
  easeInputText.value = easeInputSlider.value;
  setEase(easeInputSlider.value);
});
