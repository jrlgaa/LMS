document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const toggleText = document.getElementById("toggle-text");
    const toggleLink = document.getElementById("toggle-link");
    const formTitle = document.getElementById("form-title");
    const formSubtitle = document.getElementById("form-subtitle");
  
    let isLogin = true;
  
    function updateToggle() {
      if (isLogin) {
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
        formTitle.textContent = "Learning Management System";
        formSubtitle.textContent = "Log in to your account";
        toggleText.innerHTML = `
          Don’t have an account?
          <a href="#" id="toggle-link" class="text-blue-400 hover:text-blue-300 font-medium">Sign up</a>
        `;
      } else {
        loginForm.classList.add("hidden");
        signupForm.classList.remove("hidden");
        formTitle.textContent = "Create your account";
        formSubtitle.textContent = "Join the Learning Management System";
        toggleText.innerHTML = `
          Already have an account?
          <a href="#" id="toggle-link" class="text-blue-400 hover:text-blue-300 font-medium">Log in</a>
        `;
      }
      // Rebind new toggle link
      document.getElementById("toggle-link").addEventListener("click", (e) => {
        e.preventDefault();
        isLogin = !isLogin;
        updateToggle();
      });
    }
  
    // Initial toggle link binding
    toggleLink.addEventListener("click", (e) => {
      e.preventDefault();
      isLogin = !isLogin;
      updateToggle();
    });
  
    // Handle Login submit
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("Login attempted");
      alert("Login submitted!");
    });
  
    // Handle Signup submit
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
  