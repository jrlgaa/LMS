document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  // Handle Login submit
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("Login attempted");
      alert("Login submitted!");
    });
  }

  // Handle Signup submit
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputs = signupForm.querySelectorAll("input");
      const password = inputs[2].value;
      const confirmPassword = inputs[3].value;

      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Signup attempted");
      alert("Signup submitted!");
    });
  }

  // Particles.js config (blue theme)
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#3b82f6" },
      shape: { type: "circle" },
      opacity: { value: 0.6, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#3b82f6",
        opacity: 0.4,
        width: 1,
      },
      move: { enable: true, speed: 2, out_mode: "out" },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  });
});
