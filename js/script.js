console.log("Voltaro Website Loaded ✅");

document.addEventListener("DOMContentLoaded", function () {

  // ===============================
  // RTL TOGGLE
  // ===============================
  const rtlBtn = document.getElementById("rtlBtn");
  if (rtlBtn) {
    rtlBtn.addEventListener("click", () => {
      document.body.classList.toggle("rtl");
    });
  }

  // ===============================
  // NAVBAR SCROLL EFFECT
  // ===============================
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.style.background = "#000";
        navbar.style.transition = "0.3s";
      } else {
        navbar.style.background = "transparent";
      }
    });
  }

  // ===============================
  // SMOOTH SCROLL
  // ===============================
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ===============================
  // FAQ TOGGLE
  // ===============================
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach(question => {
    question.addEventListener("click", function () {
      const item = this.parentElement;
      item.classList.toggle("active");
    });
  });

  // ===============================
  // OLD RANGE (RANDOM) – SAFE GUARD
  // ===============================
  const calculateBtn = document.querySelector(".calculate-btn");
  const resultValue = document.querySelector(".range-result h3");
  if (calculateBtn && resultValue) {
    calculateBtn.addEventListener("click", function (e) {
      e.preventDefault();
      let randomRange = Math.floor(Math.random() * 30) + 30;
      resultValue.innerHTML = randomRange + " <span>/ miles</span>";
    });
  }

  // ===============================
  // SLIDER VALUES
  // ===============================
  const sliders = [
    { input: "range",  output: "rangeValue"  },
    { input: "load",   output: "loadValue"   },
    { input: "torque", output: "torqueValue" },
    { input: "height", output: "heightValue" }
  ];

  sliders.forEach(slider => {
    const input  = document.getElementById(slider.input);
    const output = document.getElementById(slider.output);

    if (input && output) {
      output.innerText = input.value;
      input.addEventListener("input", function () {
        output.innerText = this.value;
      });
    }
  });

  // ===============================
  // TEST RIDE FORM
  // ===============================
  const form = document.querySelector(".test-ride-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Test Ride Booked Successfully 🚴");
      form.reset();
    });
  }

  // ===============================
  // DARK MODE
  // ===============================
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark");
    });
  }

  // ===============================
  // PRODUCT DATA
  // ===============================
  const bikes = {
    kid1:{name:"Voltaro Kid X",price:"₹25,000",image:"images/kid_1.jpg",motor:"250W",range:"35KM",speed:"20KM/H",battery:"36V"},
    kid2:{name:"Voltaro Mini",price:"₹22,000",image:"images/kid_2.jfif",motor:"200W",range:"30KM",speed:"18KM/H",battery:"36V"},
    kid3:{name:"Voltaro Spark",price:"₹23,500",image:"images/kid_3.jpg",motor:"220W",range:"32KM",speed:"19KM/H",battery:"36V"},
    kid4:{name:"Voltaro FunRide",price:"₹24,000",image:"images/kid_4.jfif",motor:"230W",range:"34KM",speed:"20KM/H",battery:"36V"},
    kid5:{name:"Voltaro Junior",price:"₹21,000",image:"images/kid_5.jpg",motor:"200W",range:"30KM",speed:"18KM/H",battery:"36V"},
    kid6:{name:"Voltaro Kids Pro",price:"₹26,000",image:"images/kid_6.jfif",motor:"250W",range:"36KM",speed:"21KM/H",battery:"36V"},

    adult1:{name:"Voltaro X1",price:"₹45,000",image:"images/adult_1.jpg",motor:"500W",range:"70KM",speed:"40KM/H",battery:"48V"},
    adult2:{name:"Voltaro X2",price:"₹55,000",image:"images/adult_2.webp",motor:"650W",range:"80KM",speed:"45KM/H",battery:"52V"},
    adult3:{name:"Voltaro Pro",price:"₹65,000",image:"images/adult_3.webp",motor:"850W",range:"95KM",speed:"50KM/H",battery:"60V"},
    adult4:{name:"Voltaro Urban",price:"₹52,000",image:"images/adult_5.webp",motor:"600W",range:"75KM",speed:"42KM/H",battery:"48V"},
    adult5:{name:"Voltaro Max",price:"₹72,000",image:"images/adult_4.webp",motor:"1000W",range:"110KM",speed:"55KM/H",battery:"72V"},
    adult6:{name:"Voltaro Sport",price:"₹60,000",image:"images/adult_6.webp",motor:"800W",range:"90KM",speed:"48KM/H",battery:"60V"},

    senior1:{name:"Voltaro Comfort",price:"₹40,000",image:"images/old_1.jpg",motor:"350W",range:"55KM",speed:"28KM/H",battery:"48V"},
    senior2:{name:"Voltaro EasyRide",price:"₹42,000",image:"images/old_2.jfif",motor:"350W",range:"60KM",speed:"28KM/H",battery:"48V"},
    senior3:{name:"Voltaro Balance",price:"₹39,000",image:"images/old_3.avif",motor:"300W",range:"50KM",speed:"25KM/H",battery:"48V"},
    senior4:{name:"Voltaro Comfort Plus",price:"₹44,000",image:"images/old_4.jpg",motor:"400W",range:"65KM",speed:"30KM/H",battery:"48V"},
    senior5:{name:"Voltaro Glide",price:"₹41,500",image:"images/old_5.jpg",motor:"350W",range:"58KM",speed:"27KM/H",battery:"48V"},
    senior6:{name:"Voltaro Easy Max",price:"₹45,000",image:"images/old_6.avif",motor:"420W",range:"70KM",speed:"30KM/H",battery:"48V"}
  };

  // ===============================
  // PRODUCT PAGE LOAD
  // ===============================
  const params = new URLSearchParams(window.location.search);
  const bikeID = params.get("bike");

  if (bikeID && bikes[bikeID]) {
    const bike = bikes[bikeID];

    const bikeImage = document.getElementById("bikeImage");
    const bikeName  = document.getElementById("bikeName");
    const bikePrice = document.getElementById("bikePrice");

    if (bikeImage) bikeImage.src = bike.image;
    if (bikeName)  bikeName.innerText  = bike.name;
    if (bikePrice) bikePrice.innerText = bike.price;

    const motorSpec   = document.getElementById("motorSpec");
    const rangeSpec   = document.getElementById("rangeSpec");
    const speedSpec   = document.getElementById("speedSpec");
    const batterySpec = document.getElementById("batterySpec");

    if (motorSpec)   motorSpec.innerText   = bike.motor;
    if (rangeSpec)   rangeSpec.innerText   = bike.range;
    if (speedSpec)   speedSpec.innerText   = bike.speed;
    if (batterySpec) batterySpec.innerText = bike.battery;
  }

  // ===============================
  // PRODUCT IMAGE THUMBNAILS
  // ===============================
  const mainImage = document.getElementById("bikeImage");
  const thumbs    = document.querySelectorAll(".thumb");

  if (mainImage && thumbs.length > 0) {
    thumbs.forEach(thumb => {
      thumb.addEventListener("click", function () {
        mainImage.src = this.src;
      });
    });
  }

  // ===============================
  // RANGE CARD ANIMATION (NEW)
  // ===============================
  const calcBtn        = document.querySelector(".range-calc-btn");
  const resultBlockNew = document.querySelector(".range-result");
  const valueEl        = document.querySelector(".result-value");
  const noteEl         = document.querySelector(".result-note");
  const metaEls        = document.querySelectorAll(".result-meta .meta-value");
  const terrainButtons = document.querySelectorAll(".range-toggle button");

  if (calcBtn && resultBlockNew && valueEl) {

    // terrain toggle active state
    terrainButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        terrainButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });

    function getRangeEstimate() {
      const selects  = document.querySelectorAll(".range-form select");
      const distance = selects[0]?.value || "15 miles";
      const weight   = selects[1]?.value || "180 lb";
      const assist   = selects[2]?.value || "Normal";

      let base = 40;

      if (distance.includes("20")) base -= 2;
      if (distance.includes("25")) base -= 5;

      if (weight.includes("200")) base -= 3;
      if (weight.includes("220")) base -= 6;

      if (assist === "Eco")   base += 8;
      if (assist === "Turbo") base -= 8;

      if (base < 15) base = 15;
      if (base > 75) base = 75;

      return Math.round(base);
    }

    function animateNumber(el, from, to, duration) {
      const start = performance.now();
      function frame(now) {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.round(from + (to - from) * progress);
        el.textContent = value;
        if (progress < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }

    calcBtn.addEventListener("click", () => {
      const oldVal = parseInt(valueEl.textContent.trim(), 10) || 0;
      const newVal = getRangeEstimate();

      valueEl.classList.remove("animating");
      void valueEl.offsetWidth;
      valueEl.classList.add("animating");
      animateNumber(valueEl, oldVal, newVal, 500);

      if (noteEl) {
        noteEl.textContent = "Based on your latest inputs.";
      }

      if (metaEls.length >= 3) {
        metaEls[0].textContent = "720 Wh";
        metaEls[1].textContent = "750 W";
        metaEls[2].textContent = newVal >= 40 ? "28 mph" : "25 mph";
      }

      resultBlockNew.classList.remove("animate-in");
      void resultBlockNew.offsetWidth;
      resultBlockNew.classList.add("animate-in");
    });
  }
});


// ===============================
// CONTACT FORM (SAFE)
// ===============================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    if (name === "" || email === "" || subject === "" || message === "") {
      formMessage.style.color = "#f00";
      formMessage.textContent = "Please fill all the fields!";
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      formMessage.style.color = "#f00";
      formMessage.textContent = "Please enter a valid email!";
      return;
    }

    formMessage.style.color = "#0f0";
    formMessage.textContent = "Thank you! Your message has been sent.";

    contactForm.reset();
  });
}



// ===============================
// COMPARE CARD SELECTION
// ===============================
const compareCards = document.querySelectorAll(".compare-card");
const specsCard    = document.querySelector(".specs");

if (compareCards.length > 0 && specsCard) {
  compareCards.forEach(card => {
    card.addEventListener("click", () => {
      // 1) Make Specs look like a normal white card
      specsCard.style.background = "#fff";
      specsCard.style.color = "#111";
      specsCard.style.border = "1px solid #eee";

      // 2) Reset all bike cards
      compareCards.forEach(c => c.classList.remove("selected"));

      // 3) Highlight the clicked bike
      card.classList.add("selected");
    });
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const rangeSection = document.querySelector(".range-section");
  const valueEl = document.querySelector(".result-value");
  if (!rangeSection || !valueEl) return;

  const targetValue = parseInt(valueEl.dataset.target, 10) || 0;
  const duration = 1200; // ms

  function animateCounter() {
    const start = 0;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(start + (targetValue - start) * progress);
      valueEl.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        valueEl.textContent = targetValue; // ensure exact
      }
    }

    requestAnimationFrame(update);
  }

  // Use IntersectionObserver so it starts when visible
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter();
          observer.unobserve(entry.target); // run once
        }
      });
    },
    { threshold: 0.4 } // when ~40% of section is visible
  );

  observer.observe(rangeSection);
});




  document.addEventListener("DOMContentLoaded", function () {
    const reviews = document.querySelectorAll(".service-reviews .review");
    let current = 0;
    const interval = 4000; // 4 seconds

    if (!reviews.length) return;

    // show first
    reviews.forEach(r => r.classList.remove("active"));
    reviews[0].classList.add("active");

    setInterval(() => {
      reviews[current].classList.remove("active");
      current = (current + 1) % reviews.length;
      reviews[current].classList.add("active");
    }, interval);
  });



document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".bike-carousel");

  carousels.forEach(carousel => {
    const scrollEl = carousel.querySelector(".bike-scroll");
    const prevBtn  = carousel.querySelector(".bike-prev");
    const nextBtn  = carousel.querySelector(".bike-next");

    if (!scrollEl || !prevBtn || !nextBtn) return;

    const cardWidth = 260 + 22; // min-width 260 + gap 22

    prevBtn.addEventListener("click", () => {
      scrollEl.scrollBy({ left: -cardWidth, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
      scrollEl.scrollBy({ left: cardWidth, behavior: "smooth" });
    });
  });
});

