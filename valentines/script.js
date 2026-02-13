const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const message = document.getElementById("message");
const popup = document.getElementById("popup");
const sound = document.getElementById("vineBoom");
const heartsContainer = document.getElementById("hearts");

let size = 1;
let clickCount = 0;
const angryEmojis = ["😢", "😠", "😡", "🤬", "👿"];

/* ===========================
      Floating Hearts
=========================== */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 20 + Math.random() * 20 + "px";

  // როცა დააჭერს
  heart.addEventListener("click", () => {
    heart.innerHTML = "💔";
    heart.classList.add("break");
  });

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 500);

/* ===========================
      No Button
=========================== */
noBtn.addEventListener("click", () => {
  clickCount++;

  // Button shrink
  size -= 0.1;
  if (size > 0.2) noBtn.style.transform = `scale(${size})`;

  // Change emoji
  if (clickCount < angryEmojis.length) {
    noBtn.textContent = "No " + angryEmojis[clickCount];
  } else {
    noBtn.textContent = "STOP 💀";

    // BREAK ALL HEARTS
    const allHearts = document.querySelectorAll(".heart");
    allHearts.forEach((heart) => {
      heart.innerHTML = "💔";
      heart.classList.add("break");
    });

    // HIDE YES BUTTON
  }

  // Shake screen
  document.body.classList.add("shake");
  setTimeout(() => {
    document.body.classList.remove("shake");
  }, 300);

  // Popup
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 1000);
});

/* ===========================
      Yes Button
=========================== */
yesBtn.addEventListener("click", () => {
  // Sweet message გამოჩნდება
  message.style.display = "block";

  // No ღილაკი გაიქცეს
  noBtn.style.transition = "transform 1.2s ease-in-out";
  noBtn.style.transform = "translateX(200vw)";

  // დათვი გამოჩნდეს
  const bearContainer = document.getElementById("bear-container");
  bearContainer.style.display = "flex";
});
