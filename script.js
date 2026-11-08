const hugBtn = document.getElementById('hugBtn');
const noteBtn = document.getElementById('noteBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const gotIt = document.getElementById('gotIt');
const toast = document.getElementById('toast');
const message = document.getElementById('message');

const hugs = [
  'Ôm em một cái thật chặt nè! Mong hôm nay em thấy dễ chịu hơn hôm qua một chút. 🐰',
  'Thỏ trắng gửi thêm năng lượng tích cực cho em. Nhớ nghỉ ngơi và đừng bỏ bữa nha! ☀️',
  'Không cần phải mạnh mẽ suốt đâu. Hôm nay cứ làm một em bé cần được chăm sóc nhé. 🤍',
  'Chúc em ngủ một giấc thật ngon, thức dậy thấy người nhẹ nhõm và khỏe khoắn hơn. 🌷'
];
let hugIndex = 0;
let toastTimer;

function showToast(text) {
  toast.textContent = text;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2300);
}

function makeHearts() {
  const symbols = ['♡', '♥', '✦', '🤍'];
  for (let i = 0; i < 9; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart-pop';
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = `${42 + Math.random() * 16}%`;
    heart.style.top = `${55 + Math.random() * 12}%`;
    heart.style.setProperty('--drift', `${Math.random() * 150 - 75}px`);
    heart.style.animationDelay = `${Math.random() * .25}s`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1800);
  }
}

hugBtn.addEventListener('click', () => {
  message.textContent = hugs[hugIndex % hugs.length];
  hugIndex++;
  makeHearts();
  showToast('Thỏ trắng đã gửi một chiếc ôm đến em! ♡');
});

function openNote() {
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  gotIt.focus();
}
function hideNote() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  noteBtn.focus();
}
noteBtn.addEventListener('click', openNote);
closeModal.addEventListener('click', hideNote);
gotIt.addEventListener('click', hideNote);
modal.addEventListener('click', (event) => {
  if (event.target === modal) hideNote();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('open')) hideNote();
});
