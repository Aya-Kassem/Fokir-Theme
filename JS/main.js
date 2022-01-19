let 
navbar = document.querySelector('.navbar'),
windowScroll,
counterSection,
allSections = document.querySelectorAll('section'),sectionLocation,currentSection,
allLinks = document.querySelectorAll('.navbar li a'),
linkId,notActive,topBtn = document.querySelector('.back-to-top')
;

window.onscroll = function(){
    windowScroll = window.scrollY;
    counterSection = document.querySelector('#portfolio').offsetTop;
    
    if( windowScroll > 500 ){
        navbar.classList.add('scroll-nav')
    }else{
        navbar.classList.remove('scroll-nav');
    }
    if( windowScroll >= counterSection + 400){
        counting('.item-one', 0, 200);
        counting('.item-two', 0, 345);
        counting('.item-three', 0, 1800);
        counting('.item-four', 0, 1200);
    }

    allSections.forEach(section => {
        sectionLocation = section.offsetTop;
        if( windowScroll >= sectionLocation -150){
            currentSection = section.getAttribute('id');
        }
    })
    allLinks.forEach(link => {
        notActive = document.querySelector(".navbar li a.active");
        linkId = link.getAttribute('href');
        if( linkId.includes(currentSection) ){
            notActive.classList.remove("active");
            link.classList.add('active');
        }
    });

    windowScroll >= 500 ? topBtn.classList.add('show') : topBtn.classList.remove('show');
}

topBtn.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})




// ACTIVE NAV LINKS ON CLICK...........
allLinks.forEach(link => {
    link.addEventListener('click', function() {
        notActive.classList.remove("active");
        this.classList.add("active")
    })
})

// TYPING ......
new Typed('.typed', {
    stringsElement: '.typed-strings',
    loop: true,
    typeSpeed: 60,
    backSpeed: 100,
    backDelay: 2000
});

// COUNTER FUNCTION .......
function counting(el, from, end){
    $(el).counter({ 
        countFrom: from,
        countTo: end
    })
}





