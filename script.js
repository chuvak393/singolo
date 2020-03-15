// menu
const MENU = document.getElementById('menu');

// slider
const PREV = document.querySelector(".arrow-left");
const NEXT = document.querySelector(".arrow-right");
let slider = document.getElementsByClassName("slider");

// screen off
const SCREEN_OFF_VER = document.querySelector(".phone_vertical");
const SCREEN_OFF_HOR = document.querySelector(".phone_horizontal");


// portfolio border
const BORDER_PORTFOLIO = document.getElementById('portfolio_img_')

// portfolio tags
const PORTFOLIO_MENU = document.getElementById('portfolio_menu');

// buttons
const BUTTON = document.getElementById('button');
const CLOSE_BUTTON = document.getElementById('close-button');

//
//
// menu
MENU.addEventListener('click', (e) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    e.target.classList.add('active');
});

// slider
PREV.addEventListener('click', (e) => {
    if (slider[0].classList[1] == "slide2") {
        document.querySelector("body > main > section.slider > div > div > div:nth-child(2)").classList.remove('hidden');
        document.querySelector("body > main > section.slider > div > div > div:nth-child(3)").classList.add('hidden');
        slider[0].classList.remove('slide2');
    }
    else { 
        document.querySelector("body > main > section.slider > div > div > div:nth-child(2)").classList.add('hidden');
        document.querySelector("body > main > section.slider > div > div > div:nth-child(3)").classList.remove('hidden');
        document.querySelector(".screen_off_horizontal").classList.add('hidden');
        document.querySelector(".screen_off_vertical").classList.add('hidden');
        slider[0].classList.add('slide2');
     }
});

NEXT.addEventListener('click', (e) => {
    if (slider[0].classList[1] == "slide2") {
        document.querySelector("body > main > section.slider > div > div > div:nth-child(2)").classList.remove('hidden');
        document.querySelector("body > main > section.slider > div > div > div:nth-child(3)").classList.add('hidden');
        slider[0].classList.remove('slide2');
    }
    else { 
        document.querySelector("body > main > section.slider > div > div > div:nth-child(2)").classList.add('hidden');
        document.querySelector("body > main > section.slider > div > div > div:nth-child(3)").classList.remove('hidden');
        document.querySelector(".screen_off_horizontal").classList.add('hidden');
        document.querySelector(".screen_off_vertical").classList.add('hidden');
        slider[0].classList.add('slide2');
     }
});


// screen off
SCREEN_OFF_VER.addEventListener('click', (e) => {
    if (document.querySelector(".screen_off_vertical").classList[1] !== "hidden") {
        document.querySelector(".screen_off_vertical").classList.add('hidden');
    }
    else {
        document.querySelector(".screen_off_vertical").classList.remove('hidden');
    }
});


SCREEN_OFF_HOR.addEventListener('click', (e) => {
    if (document.querySelector(".screen_off_horizontal").classList[1] !== "hidden") {
        document.querySelector(".screen_off_horizontal").classList.add('hidden');
    }
    else {
        document.querySelector(".screen_off_horizontal").classList.remove('hidden');
    }
});

// border img
BORDER_PORTFOLIO.addEventListener('click', (e) => {
    if(e.target.classList[0] == 'portfolio_img'){
    BORDER_PORTFOLIO.querySelectorAll('img').forEach(el => el.classList.remove('portfolio_img_border'));
    e.target.classList.add('portfolio_img_border');    
    }
    else {
        BORDER_PORTFOLIO.querySelectorAll('img').forEach(el => el.classList.remove('portfolio_img_border'));
    }
});

// Portfolio tags
PORTFOLIO_MENU.addEventListener('click', (e) => {
    if(e.target.classList[0] == 'tags') {
    PORTFOLIO_MENU.querySelectorAll('button').forEach(el => el.classList.remove('tags_selected'));
    e.target.classList.add('tags_selected');
    document.getElementById('portfolio_img_').append(document.querySelector("#portfolio_img_ > img:nth-child(1)"))
    }
});


// Submit
document.querySelector('form').addEventListener('submit', (e) => {
    event.preventDefault();
    return false;
});


BUTTON.addEventListener('click', (e) => {
    const subject = document.getElementById('subject').value.toString();
    const describe = document.getElementById('describe').value.toString();
    if (document.getElementById('name').value != '' && document.querySelector('#email').value !='' && /[A-Za-z0-9]@[A-Za-z]/.test(document.querySelector('#email').value)) {
        if (subject != '') {
            document.getElementById('subject-result').innerText = 'Тема: ' + subject;
        }
        else {
            document.getElementById('subject-result').innerText = 'Без темы'
        }
        if (describe != '') {
            document.getElementById('describe-result').innerText = 'Описание: ' + describe;
        } 
        else {
            document.getElementById('describe-result').innerText = 'Без описания';
        }
        document.getElementById('message-block').classList.remove('hidden')
        document.querySelector('body').style.overflow = "hidden"
    }
});


CLOSE_BUTTON.addEventListener('click', (e) => {
    document.getElementById('subject-result').innerText = '';
    document.getElementById('describe-result').innerText = '';
    document.getElementById('subject').value = "";
    document.getElementById('describe').value = "";
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message-block').classList.add('hidden')
    document.querySelector('body').style.overflow = "visible"
});

