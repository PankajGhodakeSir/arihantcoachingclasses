/* =========================
   PREMIUM WEBSITE SCRIPT ✅
   ========================= */

/* ✅ Smooth Scroll Reveal */
const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.18 }
);

revealEls.forEach((el) => revealObserver.observe(el));

/* ✅ Micro Button Tap Animation (Premium feel) */
const allButtons = document.querySelectorAll("a.btn, a.btnMini, .smallBtn, button");

allButtons.forEach((btn) => {
  btn.addEventListener("touchstart", () => {
    btn.style.transform = "scale(0.98)";
  });
  btn.addEventListener("touchend", () => {
    btn.style.transform = "";
  });

  btn.addEventListener("mousedown", () => {
    btn.style.transform = "scale(0.98)";
  });
  btn.addEventListener("mouseup", () => {
    btn.style.transform = "";
  });
});

/* ✅ Slider Navigation */
const navBtns = document.querySelectorAll(".navBtn");

navBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const track = document.getElementById(targetId);

    if (!track) return;

    const scrollAmount = 260;
    if (btn.classList.contains("left")) {
      track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      track.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  });
});

/* ✅ Gallery Lightbox Fullscreen */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");
const galleryImgs = document.querySelectorAll(".gImg");

galleryImgs.forEach((img) => {
  img.addEventListener("click", () => {
    if (!lightbox || !lightboxImg) return;

    lightboxImg.src = img.src;
    lightbox.classList.add("show");

    // ✅ Disable background scroll
    document.body.style.overflow = "hidden";
  });
});

// ✅ Close on X click
if (closeLightbox) {
  closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("show");
    document.body.style.overflow = "";
  });
}

// ✅ Close on background click
if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("show");
      document.body.style.overflow = "";
    }
  });
}

// ✅ Close on back button (Android) / ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox?.classList.contains("show")) {
    lightbox.classList.remove("show");
    document.body.style.overflow = "";
  }
});

/* ✅ Branch System (Header + Contact Section) */
const headerBranch1 = document.getElementById("headerBranch1");
const headerBranch2 = document.getElementById("headerBranch2");
const addressText = document.getElementById("addressText");

// ✅ Branch Data
const branchData = {
  branch1: {
    address:
      "Arihant Coaching Classes Arihant Abacus Classes, Garkheda Rd, near Sut Girni Road, Kabra Nagar, Garkheda, Chhatrapati Sambhajinagar, Maharashtra 431009",
    map: "https://maps.app.goo.gl/CjwfZ5hfX9HoxxMQ7",
  },
  branch2: {
    address:
      "Arihant coaching classes, Gadiya vihar branch, oppsite Tiny toddlers school, Gadiya vihar, Sambhajinagar, Shivnagar, Chhatrapati Sambhajinagar, Maharashtra 431001",
    map: "https://maps.app.goo.gl/BUSDbtPJdHEMyj1u7",
  },
};

function setBranch(branchKey) {
  // ✅ Update active button UI
  if (branchKey === "branch1") {
    headerBranch1?.classList.add("active");
    headerBranch2?.classList.remove("active");
  } else {
    headerBranch2?.classList.add("active");
    headerBranch1?.classList.remove("active");
  }

  // ✅ Update Contact Address text
  if (addressText) {
    addressText.style.opacity = "0";
    addressText.style.transform = "translateY(6px)";

    setTimeout(() => {
      addressText.innerText = branchData[branchKey].address;

      addressText.style.opacity = "1";
      addressText.style.transform = "translateY(0)";
    }, 180);
  }
}

// ✅ Click events
headerBranch1?.addEventListener("click", () => setBranch("branch1"));
headerBranch2?.addEventListener("click", () => setBranch("branch2"));

/* ✅ Set Default Branch */
setBranch("branch1");

/* ✅ Extra Premium: Smooth Track Scroll Highlight */
const tracks = document.querySelectorAll(".track");
tracks.forEach((track) => {
  track.addEventListener("scroll", () => {
    track.style.scrollBehavior = "smooth";
  });
});