document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".link-btn");

    buttons.forEach(btn => {
        btn.addEventListener("mouseover", () => {
            btn.style.transform = "scale(1.1)";
            btn.style.transition = "0.3s ease";
        });

        btn.addEventListener("mouseout", () => {
            btn.style.transform = "scale(1)";
        });

        btn.addEventListener("mousedown", () => {
            btn.style.transform = "scale(0.9)";
        });

        btn.addEventListener("mouseup", () => {
            btn.style.transform = "scale(1.1)";
        });
    });
});
