function countdown(callback) {
  window.setTimeout(callback())
}

function createMultiplier() {
  doubler = createMultiplier
}
