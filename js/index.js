const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navElements = Array.from(document.getElementsByTagName("nav")[0].children); // I know this is a little convoluted: I'm just playing around! :)
for (let i = 1; i <= 6; i++) {
  navElements[i - 1].textContent = siteContent.nav[`nav-item-${i}`];
}

let cta = document.getElementsByClassName("cta")[0];
let ctaText = cta.querySelector(".cta-text");
let ctaH1 = ctaText.children[0];
ctaH1.textContent = siteContent.cta.h1;
let ctaButton = ctaText.children[1];
ctaButton.textContent = siteContent.cta.button;
let ctaImg = cta.children["cta-img"];
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);
// Okay. The above is _definitely_ convoluted. What'd be the best way of doing this?

let textContent = document.getElementsByClassName("text-content")
let textToInject = [];
for (key in siteContent["main-content"]) {
  if (key != "middle-img-src") {
    textToInject.push(siteContent["main-content"][key]);
  }
}
for (let i = 0; i < textContent.length * 2; i++) {
  textContent[Math.floor(i / 2)].children[i % 2].textContent = textToInject[i];
}
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let contact = document.querySelector(".contact");
let contactKeys =  Object.keys(siteContent.contact);
for (let i = 0; i < contactKeys.length; i++) {
  contact.children[i].textContent = siteContent.contact[contactKeys[i]];
}

let footer = document.querySelector("footer");
footer.textContent = siteContent.footer.copyright;

// Task 3:
document.querySelectorAll("a").forEach(a => a.style.color = "green");

let navFAQ = document.createElement("a");
navFAQ.textContent = "FAQ";
document.querySelector("nav").appendChild(navFAQ);
let home = document.createElement("a");
home.textContent = "Home";
document.querySelector("nav").prepend(home);

document.querySelectorAll("a").forEach(a => a.style.color = "green"); // Pasted again to check whether it'd turn _navFAQ_ and _home_ green...