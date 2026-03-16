document.addEventListener("DOMContentLoaded", function () {


// ===============================
// LEARN MORE BUTTON
// ===============================

const learnBtn = document.getElementById("learnBtn");
const moreContent = document.getElementById("moreContent");

if (learnBtn && moreContent) {

learnBtn.addEventListener("click", function () {

moreContent.classList.toggle("show");

learnBtn.innerText =
moreContent.classList.contains("show")
? "Show Less"
: "Learn More";

});

}


// ===============================
// KNOW MORE BUTTON
// ===============================

const knowBtn = document.getElementById("knowBtn");
const whyMore = document.getElementById("whyMore");

if (knowBtn && whyMore) {

knowBtn.addEventListener("click", function () {

whyMore.classList.toggle("show");

knowBtn.innerText =
whyMore.classList.contains("show")
? "Show Less"
: "Know More";

});

}


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

function revealElements() {

const reveals = document.querySelectorAll(
".reveal, .reveal-left, .reveal-right"
);

reveals.forEach((element) => {

const windowHeight = window.innerHeight;
const elementTop = element.getBoundingClientRect().top;

if (elementTop < windowHeight - 100) {

element.classList.add("active");

}

});

}

window.addEventListener("scroll", revealElements);
revealElements();


// ===============================
// TIMELINE ANIMATION
// ===============================

function animateTimeline() {

const items = document.querySelectorAll(".timeline-item");

items.forEach((item) => {

const windowHeight = window.innerHeight;
const itemTop = item.getBoundingClientRect().top;

if (itemTop < windowHeight - 80) {

item.classList.add("show");

}

});

}

window.addEventListener("scroll", animateTimeline);
animateTimeline();


// ===============================
// STATS COUNTER ANIMATION
// ===============================

const counters = document.querySelectorAll(".counter");
let started = false;

function startCounters(){

const trigger = document.querySelector(".stats-section");

if(!trigger) return;

const triggerTop = trigger.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if(triggerTop < windowHeight - 100 && !started){

started = true;

counters.forEach(counter => {

const target = +counter.getAttribute("data-target");
let count = 0;

const speed = target / 150;

function update(){

count += speed;

if(count < target){

counter.innerText = Math.floor(count);
requestAnimationFrame(update);

}else{

counter.innerText = target;

}

}

update();

});

}

}

window.addEventListener("scroll", startCounters);

});

// ===============================
// ACHIEVEMENTS NUMBER ANIMATION
// ===============================

document.addEventListener("DOMContentLoaded", function () {

  const section = document.querySelector(".achievements");
  const titles = document.querySelectorAll(".achievement-card h3");
  let started = false;

  function animateAchievements() {

    if (!section || started) return;

    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {

      started = true;

      titles.forEach(title => {

        const text = title.innerText;
        const numberMatch = text.match(/\d+/); // find number in text

        if (!numberMatch) return;

        const target = parseInt(numberMatch[0]);
        const suffix = text.replace(numberMatch[0], ""); // keep text like "+ Riders"

        let count = 0;
        const speed = target / 120;

        function update() {

          count += speed;

          if (count < target) {
            title.innerText = Math.floor(count) + suffix;
            requestAnimationFrame(update);
          } else {
            title.innerText = target + suffix;
          }

        }

        update();

      });

    }

  }

  window.addEventListener("scroll", animateAchievements);

});