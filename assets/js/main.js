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

// Function to start playing both audio files after the website is loaded
function playAudioOnLoad() {
  speechPlayer.play();
  musicPlayer.play();
  // Remove the event listener to ensure audio only plays once
  document.removeEventListener("DOMContentLoaded", playAudioOnLoad);
}

// Add event listener to start playing audio when the website is loaded
document.addEventListener("DOMContentLoaded", playAudioOnLoad);

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
