gsap.from(".left", { duration: 1, x: -200, opacity: 0, ease: "power2.out" });
gsap.from(".right", { duration: 1, x: 200, opacity: 0, ease: "power2.out" });

document.getElementById("joinBtn").addEventListener("click", function () {
  window.location.href = "https://chat.whatsapp.com/JSaYcLcSxkeHvSLIcZhack";
});

const downloadBtns = document.querySelectorAll(".downloadBtn");

downloadBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Implement PDF download logic here
    alert("Downloading PDF...");
  });
});
