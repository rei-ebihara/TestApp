let count = 0
let bomb = Math.floor(Math.random() * 10) + 5 // 5〜14回で爆発

function push() {
  count++

  const countEl = document.getElementById("count")
  const statusEl = document.getElementById("status")

  countEl.textContent = count

  // 拡大演出
  countEl.classList.add("big")
  setTimeout(() => countEl.classList.remove("big"), 100)

  // 危険演出
  if (count > bomb - 3) {
    countEl.classList.add("danger")
  }

  // 爆発
  if (count === bomb) {
    statusEl.textContent = "💥 爆発！"
    statusEl.classList.add("explode")

    document.body.classList.add("flash")
    setTimeout(() => document.body.classList.remove("flash"), 200)
  }
}
