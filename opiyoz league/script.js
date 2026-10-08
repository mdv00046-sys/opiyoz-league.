// OPIYOZ LEAGUE Assistant Logic
// API Key placeholder - never store sensitive keys directly in public source code
const API_KEY = "YOUR_API_KEY_HERE";

const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

function appendMessage(sender, text) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender === "user" ? "user-message" : "bot-message");
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function handleSend() {
  const text = userInput.value.trim();
  if (!text) return;

  appendMessage("user", text);
  userInput.value = "";

  // Simulated bot response for public demo
  setTimeout(() => {
    appendMessage("bot", `OPIYOZ LEAGUE Assistant received: "${text}"`);
  }, 600);
}

sendBtn.addEventListener("click", handleSend);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleSend();
});