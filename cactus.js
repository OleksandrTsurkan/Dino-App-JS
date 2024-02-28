import { setCustomProperty } from "./updateCustomProperty";

const SPPED = 0.05;
const CACTUS_INTERVAL_MIN = 500;
const CACTUS_INTERVAL_MAX = 2000;
const worldElem = document.querySelector("[data-world]");

let nextCactusTime;
export function setupCactus() {
  nextCactusTime = CACTUS_INTERVAL_MIN;
}

export function updateCactus(delta, speedScale) {
  document.querySelectorAll("[data-cactus]");
  if (nextCactusTime <= 0) {
    createCactus();
    nextCactusTime =
      randomNumberBetween(CACTUS_INTERVAL_MIN, CACTUS_INTERVAL_MAX) /
      speedScale;
  }
  nextCactusTime -= delta;
}

function createCactus() {
  const cactus = document.createElement("div");
  cactus.dataset.cactus = true;
  cactus.src = "img/cactus.png";
  cactus.classList.add("cactus");
  setCustomProperty(cactus, "--left", 100);
  worldElem.append(cactus);
}

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
