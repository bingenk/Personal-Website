/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});
/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactProject = document.getElementById("contact-project"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // Check if the field has a value
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactProject.value === ""
  ) {
    //Add and remove color
    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");

    //Show message
    contactMessage.textContent = "Write all the input fields";
  } else {
    // serviceID - templateID - #form - publicKey
    emailjs
      .sendForm(
        "service_juy593l",
        "template_ixnaduy",
        "#contact-form",
        "WuhedLdfHOtfIvCNf"
      )
      .then(
        () => {
          //show message and add color
          contactMessage.classList.add("color-blue");
          contactMessage.textContent = "Message sent";

          //Remove message after five seconds
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("OOPS! SOMETHING HAS FAILED...", error);
        }
      );

    //To clear the input field
    contactName.value = "";
    contactEmail.value = "";
    contactProject.value = "";
  }
};
contactForm.addEventListener("submit", sendEmail);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "2500",
  delay: "400",
  // reset: 'true' /* Animations repeat */
});

sr.reveal(
  `.home__data, .projects__container, .testimonial__container, .footer__container, .home__profile img`
);
sr.reveal(`.home__info div`, { delay: 600, origin: "bottom", interval: 100 });
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1) `, {
  origin: "left",
});
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {
  origin: "right",
});
sr.reveal(`.qualification__content`, { interval: 100 });

/*=============== WELCOME AUDIO ===============*/
const speechPlayer = document.getElementById("bg-speech");
const musicPlayer = document.getElementById("bg-music");

// Reduce the volume for the background music
const musicVolume = 0.5;
musicPlayer.volume = musicVolume;

// Track whether the background music has played
let musicHasPlayed = false;

// Event listener for the background music
musicPlayer.addEventListener("play", function musicPlayHandler() {
  if (musicHasPlayed) {
    musicPlayer.pause(); // Avoid audio loop
  } else {
    musicHasPlayed = true;
    musicPlayer.removeEventListener("play", musicPlayHandler);
  }
});

// Function to start playing both audio files when a user interacts with the document
function playAudio() {
  speechPlayer.play();
  musicPlayer.play();
  // Remove the event listener to ensure audio only plays once
  document.removeEventListener("click", playAudio);
}

// Add event listener to start playing audio when a user interaction occurs
document.addEventListener("click", playAudio);

/*=============== LAST UPDATED TEXT ===============*/
// window.onload = function () {
//   var apiUrl =
//     "https://api.github.com/repos/bingenk/Personal-Website/commits?per_page=1";

//   fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       var lastCommitDate = new Date(data[0].commit.author.date);
//       var lastCommitDateString = lastCommitDate.toLocaleString();
//       document.getElementById("last-updated").textContent =
//         "Last updated: " + lastCommitDateString;
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// };

/*=============== PAW BUTTON ===============*/
// let confettiAmount = 60,
//   confettiColors = [
//     "#7d32f5",
//     "#f6e434",
//     "#63fdf1",
//     "#e672da",
//     "#295dfe",
//     "#6e57ff",
//   ],
//   random = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   },
//   createConfetti = (to) => {
//     let elem = document.createElement("i"),
//       set = Math.random() < 0.5 ? -1 : 1;
//     elem.style.setProperty("--x", random(-260, 260) + "px");
//     elem.style.setProperty("--y", random(-160, 160) + "px");
//     elem.style.setProperty("--r", random(0, 360) + "deg");
//     elem.style.setProperty("--s", random(0.6, 1));
//     elem.style.setProperty("--b", confettiColors[random(0, 5)]);
//     to.appendChild(elem);
//   };

// // Function to increment likes count
// function incrementLikes() {
//   // Get the current likes count
//   let likesCountElem = document.getElementById("likes-count");
//   let currentLikes = parseInt(likesCountElem.innerText);

//   // Trigger confetti animation
//   let pawButton = document.querySelector(".paw-button");
//   if (!pawButton.classList.contains("animation")) {
//     pawButton.classList.add("animation");
//     for (let i = 0; i < confettiAmount; i++) {
//       createConfetti(pawButton);
//     }
//     setTimeout(() => {
//       pawButton.classList.add("confetti");
//       setTimeout(() => {
//         pawButton.classList.add("liked");
//         likesCountElem.textContent = currentLikes + 1; // Increment likes count
//       }, 400);
//       setTimeout(() => {
//         pawButton.querySelectorAll("i").forEach((i) => i.remove());
//       }, 600);
//     }, 260);
//   }

//   // Update the likes count in the server (you'll need server-side logic for this)
//   // Here, you can send an AJAX request to update the likes count in your database
// }

// // Attach click event listener to the paw button
// document.querySelectorAll(".paw-button").forEach((elem) => {
//   elem.addEventListener("click", (e) => {
//     incrementLikes();
//     e.preventDefault();
//   });
// });
