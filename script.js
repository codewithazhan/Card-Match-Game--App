const emojis = ['😎','😻','🤠','🥰','🐯','😝','🥳','😈'];
let flipped = [], matchedCount = 0, lock = false;

function startGame() {
const game = document.getElementById('game');
game.innerHTML = '';
matchedCount = 0;
lock = false;

let cards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
cards.forEach(e => {
let div = document.createElement('div');
div.className = 'card';
div.dataset.emoji = e;
div.onclick = () => flipCard(div);
game.appendChild(div);
});
}

function flipCard(card) {
if (lock || card.classList.contains('flipped')) return;
card.textContent = card.dataset.emoji;
card.classList.add('flipped');
flipped.push(card);

if (flipped.length === 2) {
let [a, b] = flipped;
if (a.dataset.emoji === b.dataset.emoji) {
a.classList.add('matched');
b.classList.add('matched');
matchedCount += 2;
if (matchedCount === emojis.length * 2) alert('🎉 You Win!');
flipped = [];
} else {
lock = true;
setTimeout(() => {
a.textContent = b.textContent = '';
a.classList.remove('flipped');
b.classList.remove('flipped');
flipped = [];
lock = false;
}, 800);
}
}
}

startGame()

