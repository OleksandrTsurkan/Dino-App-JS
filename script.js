import {updateGround} from "./ground"

const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 30;

const worldElem = document.querySelector("[data-world]");

setPixelToWorldScale();
window.addEventListener("resize", setPixelToWorldScale);

let lastTime;
function update(time) {
  if (lastTime == null) {
    lastTime = time;

    window.requestAnimationFrame(update);
    return;
  }
  const delta = time - lastTime;
  lastTime = time;
  updateGround(delta);

  window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);

function setPixelToWorldScale() {
  let worldToPixelScale;
  if (window.innerWidth / window.innerHeight < WORLD_HEIGHT) {
    worldToPixelScale = window.innerWidth / WORLD_HEIGHT;
  } else {
    worldToPixelScale = window.innerHeight / WORLD_HEIGHT;
  }
  worldElem.computedStyleMap.width = `${WORLD_WIDTH * worldToPixelScale}px`;
  worldElem.computedStyleMap.height = `${WORLD_HEIGHT * worldToPixelScale}px`;
}
