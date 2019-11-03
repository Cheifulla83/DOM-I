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

let nav1 = document.querySelector('a');
  console.log(nav1)
  nav1.textContent = siteContent['nav']['nav-item-1']
let nav2 = document.querySelectorAll('nav, a');
  console.log(nav2)
  nav2[2].textContent = siteContent['nav']['nav-item-2']
let nav3 = document.querySelectorAll('nav, a');
  nav3[3].textContent = siteContent['nav']['nav-item-3']
let nav4 = document.querySelectorAll('nav, a');
  nav4[4].textContent = siteContent['nav']['nav-item-4']
let nav5 = document.querySelectorAll('nav, a');
  nav5[5].textContent = siteContent['nav']['nav-item-5']
let nav6 = document.querySelectorAll('nav, a');
  nav6[6].textContent = siteContent['nav']['nav-item-6']

  const ctaH1 = document.querySelector('cta-text, h1');
  ctaH1.textContent = siteContent['cta']['h1'];

  const ctabtn = document.querySelector('cta-text, button');
  ctabtn.textContent = siteContent['cta']['button']

  const ctaimgsrc = document.getElementById('cta-img');
  ctaimgsrc.setAttribute('src', siteContent['cta']['img-src'])

  const mainH4Features = document.querySelector('.text-content h4')
  mainH4Features.textContent = siteContent["main-content"]['features-h4']

  const mainFeaturesContent = document.querySelector('.text-content p');
  mainFeaturesContent.textContent = siteContent["main-content"]['features-content']
  
  
  const mainH4About = document.querySelectorAll('h4')
  mainH4About[1].textContent = siteContent["main-content"]['about-h4']
  
  const mainAboutContent = document.querySelectorAll('p');
  mainAboutContent[1].textContent = siteContent["main-content"]['about-content']

  const middleImg = document.querySelector('#middle-img')
  middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

  let mainH4Services = document.querySelectorAll('h4')
  mainH4Services[2].textContent = siteContent['main-content']['services-h4']

  let mainServicesContent = document.querySelectorAll('p');
  mainAboutContent[2].textContent = siteContent["main-content"]['services-content']


  let mainH4Product = document.querySelectorAll('h4')
  mainH4Product[3].textContent = siteContent['main-content']['product-h4']

  let mainProductContent = document.querySelectorAll('p');
  mainAboutContent[3].textContent = siteContent["main-content"]['product-content']

  
  let mainH4Vision = document.querySelectorAll('h4')
  mainH4Vision[4].textContent = siteContent['main-content']['vision-h4']

  let mainVisionContent = document.querySelectorAll('p');
  mainVisionContent[4].textContent = siteContent["main-content"]['vision-content']

let contactH4 = document.querySelector('.contact h4')
contactH4.textContent = siteContent['contact']['contact-h4']
  
let contactContent = document.querySelector('.contact p');
contactContent.textContent = siteContent['contact']['address']

let contactContentPhone = document.querySelectorAll('.contact p');
contactContentPhone[1].textContent = siteContent['contact']['phone']
let contactContentEmail = document.querySelectorAll('.contact p');
contactContentEmail[2].textContent = siteContent['contact']['email']

let footerP = document.querySelector('footer p')
footerP.textContent = siteContent['footer']['copyright']