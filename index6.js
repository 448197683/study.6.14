const tx = document.getElementById(`tx`)
const sp = document.getElementById(`sp`)
console.log(tx)
tx.style.color = `red`
sp.style.color = `blue`



window.addEventListener(`mousemove`, function (e) {
  console.log(`x=${e.clientX},y=${e.clientY}`)
  sp.innerText = `x=${e.clientX},y=${e.clientY}`
  sp.style.left = `${e.clientX}px`
  sp.style.top = `${e.clientY}px`
})