document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();
  if (!this.reportValidity()) return;

  const data = new FormData(this);
  const get = (key) => (data.get(key) || "").toString().trim();
  const message = [
    "🔥 FREE FIRE TOURNAMENT — SQUAD REGISTRATION",
    "",
    `Team name: ${get("team")}`,
    `Captain: ${get("captain")}`,
    `Captain WhatsApp: ${get("phone")}`,
    "",
    "PLAYER DETAILS",
    ...[1,2,3,4].map(i => `Player ${i}: ${get(`p${i}name`)} | UID: ${get(`p${i}uid`)}`),
    "",
    "Tournament: 24–26 November 2026",
    "Entry fee: ₹200 per player | Squad total: ₹800",
    "",
    "Please share payment instructions and confirm our registration."
  ].join("\n");

  const url = "https://wa.me/919395321836?text=" + encodeURIComponent(message);
  window.open(url, "_blank", "noopener,noreferrer");
});
