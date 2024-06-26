import { gsap } from "gsap";

addEventListener("DOMContentLoaded", () => {
    let playButtons = document.querySelectorAll(".js-play-button");
    let pauseButtons = document.querySelectorAll(".js-pause-button");
    let audio1 = new Audio("/audio/enheduanna1.wav");
    let audio2 = new Audio("/audio/enheduanna2.wav");
    let audio3 = new Audio("/audio/enheduanna3.wav");
    let audiobg = new Audio("/audio/enheduannabg.wav");
    let descriptionContainers = document.querySelectorAll(".js-description");
    let descriptionTexts = document.querySelectorAll(".js-description-text");

    for (let i = 0; i < playButtons.length; i++) {
        const playButton = playButtons[i];
        const pauseButton = pauseButtons[i];
        const description = descriptionContainers[i];
        const text = descriptionTexts[i];
        playButton.addEventListener("click", () => {
            pauseButton.classList.remove("hidden");
            gsap.to(text, { backgroundColor: "#3F2212", duration: 1 });
            gsap.to(text, { color: "#CFD1D3", duration: 1 });
            if (playButton.classList.contains("audio1")) {
                audio1.play();
                audio1.addEventListener("ended", () => {
                    gsap.to(text, { backgroundColor: "#CFD1D3", duration: 1 });
                    gsap.to(text, { color: "#3F2212", duration: 1 });
                    pauseButton.classList.add("hidden");
                });
            }
            if (playButton.classList.contains("audio2")) {
                audio2.play();
                audio2.addEventListener("ended", () => {
                    gsap.to(text, { backgroundColor: "#CFD1D3", duration: 1 });
                    gsap.to(text, { color: "#3F2212", duration: 1 });
                    pauseButton.classList.add("hidden");
                });
            }
            if (playButton.classList.contains("audio3")) {
                audio3.play();
                audio3.addEventListener("ended", () => {
                    gsap.to(text, { backgroundColor: "#CFD1D3", duration: 1 });
                    gsap.to(text, { color: "#3F2212", duration: 1 });
                    pauseButton.classList.add("hidden");
                });
            }
        })
        pauseButton.addEventListener("click", () => {
            pauseButton.classList.add("hidden");
            gsap.to(text, { backgroundColor: "#CFD1D3", duration: 1 });
            gsap.to(text, { color: "#3F2212", duration: 1 });
            if (playButton.classList.contains("audio1")) {
                audio1.pause();
            }
            if (playButton.classList.contains("audio2")) {
                audio2.pause();
            }
            if (playButton.classList.contains("audio3")) {
                audio3.pause();
            }
        })
    }
})