/**===== Typing animation ===== */
const typed = new Typed(".typing", {
    strings: ["SEO Expert.", "Content Writer.", "SEO Expert.", "Content Writer.", "Business Planner.", "Script Writer."],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

/**===== Show Sidebar ===== */
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      listClose = document.getElementById('list-close')

/**===== Sidebar Show ===== */
/**===== Validates if constant exists ===== */
if(navToggle)
{
    navToggle.addEventListener("click", function(){
        navMenu.classList.add('show-sidebar');
    })
}

/**===== Sidebar Hidden ===== */
/**===== Validate if constant exists ===== */
if(navClose)
{
    navClose.addEventListener("click", function(){
        navMenu.classList.remove('show-sidebar');
    })
}

/**===== Hide sidebar when clicking on the list item ===== */
if(listClose)
{
    listClose.addEventListener("click", function(){
        navMenu.classList.remove('show-sidebar');
    })
}

/**===== Skills tabs ===== */
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

    tabs.forEach(tab => {
        tab.addEventListener("click", function(){
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents => {
                tabContents.classList.remove('skills__active')
            })

            target.classList.add('skills__active')


            tabs.forEach(tab => {
                tab.classList.remove('skills__active')
            })

            tab.classList.add('skills__active')
        })
    })

/**===== Mix it up filter portfolio ===== */
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});


/**===== Link active work ===== */
const linkActiveWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkActiveWork.forEach(i => i.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkActiveWork.forEach(i => i.addEventListener("click", activeWork))


/**===== Work Popup ===== */
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work__button"))
    {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup(){
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem)
{
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML
}
/**===== Services Modal ===== */
const modalSeeMore = document.querySelectorAll('.services__modal'),
    modalButtons = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick)
{
    modalSeeMore[modalClick].classList.add('active-modal')
}

modalButtons.forEach((modalButton, i) => {
    modalButton.addEventListener('click', function() {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', function(){
        modalSeeMore.forEach((modalSeeMores) => {
            modalSeeMores.classList.remove('active-modal')
        })
    })
})

/**===== Swiper Testimonial ===== */
let swiper = new Swiper(".testimonials__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      }
  });

/**===== Input Animation ===== **/
const inputs = document.querySelectorAll(".input");

function focusFunc()
{
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc ()
{
    let parent = this.parentNode;
    if(this.value == "")
    {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

/**===== Scroll Section Active Link ===== **/
// get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

// add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter()
{
    // get current scroll position
    let scrollY = window.pageYOffset;
    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");
        /* - If our current scroll position enters the space where current section on screen is, add .active class to
        corresponding navigation link, else remove it.
        - To know which link needs an active class, we use sectionId variable we are getting while looping through
        sections as a selector */
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}