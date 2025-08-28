tailwind.config = {
    theme: {
      extend: {
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0, transform: "translateY(20px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
          shake: {
            "0%, 100%": { transform: "translateX(0)" },
            "20%, 60%": { transform: "translateX(-8px)" },
            "40%, 80%": { transform: "translateX(8px)" },
          },
        },
        animation: {
          fadeIn: "fadeIn 0.8s ease-out",
          shake: "shake 0.5s ease-in-out",
        },
      },
    },
  };
  