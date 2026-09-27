// ==========================================
// 🎂 BIRTHDAY SURPRISE — GUNNU CUTIE
// Made by Ridhima ♡
// ==========================================


// ==========================================
// GET HTML ELEMENTS
// ==========================================

const homeScreen = document.getElementById("homeScreen");
const balloonScreen = document.getElementById("balloonScreen");
const memoryScreen = document.getElementById("memoryScreen");
const letterScreen = document.getElementById("letterScreen");

const startBtn = document.getElementById("startBtn");
const memoryBtn = document.getElementById("memoryBtn");
const nextMemoryBtn = document.getElementById("nextMemoryBtn");
const restartBtn = document.getElementById("restartBtn");

const balloons = document.querySelectorAll(".balloon");
const balloonMessage = document.getElementById("balloonMessage");

const memoryImage = document.getElementById("memoryImage");
const memoryCaption = document.getElementById("memoryCaption");

const confettiContainer = document.getElementById("confetti");


// ==========================================
// 🎵 MUSIC
// ==========================================

const openingMusic = document.getElementById("openingMusic");
const birthdayMusic = document.getElementById("birthdayMusic");


// Music settings

if (openingMusic) {
    openingMusic.loop = true;
    openingMusic.volume = 0.95;
}

if (birthdayMusic) {
    birthdayMusic.loop = true;
    birthdayMusic.volume = 0.5;
}


// ==========================================
// 📸 MEMORY PHOTOS
// ==========================================

const memoryPhotos = [
    "MEMORIES 8.jpeg",   // 1
    "MEMORIES 11.jpeg",  // 2
    "MEMORIES 3.jpeg",   // 3
    "MEMORIES 2.jpeg",   // 4
    "MEMORIES 6.jpeg",   // 5
    "MEMORIES 5.jpeg",   // 6
    "MEMORIES 4.jpeg",   // 7
    "MEMORIES 7.jpeg",   // 8
    "MEMORIES 1.jpeg",   // 9
    "MEMORIES 9.jpeg",
    "MEMORIES 10.jpeg",
    "MEMORIES 12.jpeg"
];

// ==========================================
// 💕 MEMORY CAPTIONS
// ==========================================

const memoryCaptions = [
    "Sabse pehle milo meri us choti si Gunnuuu se… 🥹🎀 Tab kaha pata tha ki ye choti si cutie patootie ek din meri life ki itni important person ban jayegi. ❤️🧿",

    "It all started with these two little idiots… 🥹🫂❤️",

    "Those school days we didn't know we'd miss this much. 🥹🫶🏻",

    "From little girls to this… somehow we're still us. 🥹🫶🏻",

    "Humari woh phase wali photos jahan pose se zyada bas saath hona important tha. 😂❤️",

    "Ek photo, itne saare faces, aur pata nahi kitni saari stories… childhood really was something else. 😭🫶🏻",

    "Just us, making another memory. 🥹🎀",

    "Different phase, same us. 🥹🧿❤️",

    "Aur phir aaye woh moments jahan sirf friendship nahi, ek dusre ki happiness celebrate karna bhi part ban gaya. 🎂🫂❤️",

    "We really grew up together, didn’t we? 🥹🫶🏻",

    "Somehow, growing up together made us even closer. 🥹🧿",

    "Different phases, different versions of us… but somehow, we're still here. 🫶🏻❤️"
];

let currentMemory = 0;


// ==========================================
// 🎁 OPEN SURPRISE
// ==========================================

startBtn.addEventListener("click", function () {

    homeScreen.classList.add("hidden");

    balloonScreen.classList.remove("hidden");


    // Stop birthday song if it was playing

    if (birthdayMusic) {
        birthdayMusic.pause();
        birthdayMusic.currentTime = 0;
    }


    // Start opening song

    if (openingMusic) {

        openingMusic.currentTime = 0;
        openingMusic.volume = 0.95;

        openingMusic.play()
            .then(function () {

                console.log("🎵 Opening song started!");

            })
            .catch(function (error) {

                console.log(
                    "Opening song error:",
                    error
                );

            });
    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    createConfetti(20);

});


// ==========================================
// 🎈 BALLOONS
// ==========================================

let poppedBalloons = 0;


balloons.forEach(function (balloon) {

    balloon.addEventListener("click", function () {

        if (balloon.classList.contains("popped")) {
            return;
        }


        const message =
            balloon.getAttribute("data-message");


        balloon.classList.add("popped");

        poppedBalloons++;

        balloonMessage.textContent = message;

        createConfetti(12);


        if (poppedBalloons === balloons.length) {

            setTimeout(function () {

                balloonMessage.textContent =
                    "You found all the little surprises! 🥹💗";

                memoryBtn.classList.remove("hidden");

                createConfetti(50);

            }, 600);

        }

    });

});


// ==========================================
// 📸 GO TO MEMORIES
// ==========================================

memoryBtn.addEventListener("click", function () {

    balloonScreen.classList.add("hidden");

    memoryScreen.classList.remove("hidden");

    currentMemory = 0;

    showMemory();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    createConfetti(30);

});


// ==========================================
// 🖼️ SHOW MEMORY
// ==========================================

function showMemory() {

    memoryImage.style.opacity = "0";


    setTimeout(function () {

        memoryImage.src =
            "images/" + memoryPhotos[currentMemory];

        memoryCaption.textContent =
            memoryCaptions[currentMemory];

        memoryImage.style.opacity = "1";

    }, 150);

}


// ==========================================
// ➡️ NEXT MEMORY
// ==========================================

nextMemoryBtn.addEventListener("click", function () {

    currentMemory++;


    if (currentMemory >= memoryPhotos.length) {

        memoryScreen.classList.add("hidden");

        letterScreen.classList.remove("hidden");


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });


        createConfetti(80);

        return;
    }


    showMemory();

});


// ==========================================
// 💌 ENVELOPE
// ==========================================

const envelope =
    document.getElementById("envelope");

const envelopeWrapper =
    document.querySelector(".envelope-wrapper");

const actualLetter =
    document.getElementById("actualLetter");

const envelopeHint =
    document.querySelector(".envelope-hint");


if (envelope) {

    envelope.addEventListener("click", function () {

        if (envelope.classList.contains("open")) {
            return;
        }


        console.log("💌 Envelope clicked!");


        envelope.classList.add("open");


        // ======================================
        // STOP OPENING SONG
        // ======================================

        if (openingMusic) {

            openingMusic.pause();

            openingMusic.currentTime = 0;

        }


        // ======================================
        // START BIRTHDAY SONG
        // ======================================

        if (birthdayMusic) {

            birthdayMusic.currentTime = 0;

            birthdayMusic.volume = 0.5;

            birthdayMusic.play()
                .then(function () {

                    console.log(
                        "🎂 Birthday song started!"
                    );

                })
                .catch(function (error) {

                    console.log(
                        "Birthday song error:",
                        error
                    );

                });

        }


        // ======================================
        // ENVELOPE TEXT
        // ======================================

        if (envelopeHint) {

            envelopeHint.textContent =
                "A letter written just for you... 🥹❤️";

        }


        createConfetti(25);


        // ======================================
        // SHOW LETTER
        // ======================================

        setTimeout(function () {

            if (envelopeWrapper) {

                envelopeWrapper.classList.add(
                    "opened"
                );

            }


            if (actualLetter) {

                actualLetter.style.display =
                    "block";

            }


            createConfetti(40);


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 1400);

    });

}


// ==========================================
// 🔄 RESTART
// ==========================================

restartBtn.addEventListener("click", function () {

    letterScreen.classList.add("hidden");

    balloonScreen.classList.remove("hidden");


    poppedBalloons = 0;


    balloons.forEach(function (balloon) {

        balloon.classList.remove("popped");

    });


    balloonMessage.textContent = "";

    memoryBtn.classList.add("hidden");

    currentMemory = 0;


    // Reset envelope

    if (envelope) {

        envelope.classList.remove("open");

    }


    if (envelopeWrapper) {

        envelopeWrapper.classList.remove("opened");

    }


    if (actualLetter) {

        actualLetter.style.display = "none";

    }


    // Stop birthday song

    if (birthdayMusic) {

        birthdayMusic.pause();

        birthdayMusic.currentTime = 0;

    }


    // Restart opening song

    if (openingMusic) {

        openingMusic.currentTime = 0;

        openingMusic.volume = 0.5;

        openingMusic.play()
            .then(function () {

                console.log(
                    "🎵 Opening song restarted!"
                );

            })
            .catch(function (error) {

                console.log(
                    "Opening song error:",
                    error
                );

            });

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==========================================
// 🎊 CONFETTI
// ==========================================

function createConfetti(amount) {

    const confettiSymbols = [
        "💗",
        "✨",
        "💜",
        "🌸",
        "🎀",
        "💫",
        "🤍",
        "💕"
    ];


    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("div");


        piece.classList.add(
            "confetti-piece"
        );


        piece.textContent =
            confettiSymbols[
                Math.floor(
                    Math.random() *
                    confettiSymbols.length
                )
            ];


        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.animationDuration =
            (2 + Math.random() * 3) + "s";


        piece.style.animationDelay =
            Math.random() * 0.8 + "s";


        const size =
            10 + Math.random() * 15;


        piece.style.fontSize =
            size + "px";


        confettiContainer.appendChild(
            piece
        );


        setTimeout(function () {

            piece.remove();

        }, 5000);

    }

}


// ==========================================
// ✨ INITIAL CONFETTI
// ==========================================

window.addEventListener("load", function () {

    setTimeout(function () {

        createConfetti(10);

    }, 1000);

});