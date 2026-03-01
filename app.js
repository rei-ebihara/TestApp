let count = 0
let bomb = Math.floor(Math.random() * 10) + 5 // 5〜14回で爆発

function push() {
  if (bomb === -1) return

  count++
  document.getElementById("count").textContent = count

  if (count === bomb) {
    document.getElementById("status").textContent = "💥 爆発！"
    bomb = -1
  }
}
