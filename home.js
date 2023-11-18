//User sign up information
const user_name = document.getElementById("Name")
const email = document.getElementById("Email")
const password = document.getElementById("Password")

function SignUp_form () {
    if (user_name.value === "" || email.value === "" || password.value === ""){
        alert("Please fill up the form")
        return
    } else{
        alert("Sign up succesfully")
        console.log(user_name.value)
        console.log(email.value)
        console.log(password.value)
        return
    }
}

document.getElementById("Submit").addEventListener("click", SignUp_form)

//Slideshow_function
const Movie1 = document.getElementById("Movie1")
const Movie2 = document.getElementById("Movie2")
const Movie3 = document.getElementById("Movie3")
const Movie4 = document.getElementById("Movie4")
const Movie5 = document.getElementById("Movie5")
const Movie6 = document.getElementById("Movie6")
const Movie7 = document.getElementById("Movie7")
const Movie8 = document.getElementById("Movie8")
const Movie9 = document.getElementById("Movie9")

//Slideshow 1
document.getElementById("prev1").addEventListener("click",function prevSlide10 () {
    Movie9.style.display = "block";
    Movie1.style.display = "none";
    return
})
document.getElementById("next1").addEventListener("click",function nextSlide2 () {
    Movie1.style.display = "none";
    Movie2.style.display = "block";
    return
})

//Slideshow 2

document.getElementById("prev2").addEventListener("click",function prevSlide1() {
    Movie1.style.display = "block";
    Movie2.style.display = "none";
    return
})
document.getElementById("next2").addEventListener("click",function nextSlide3() {
    Movie3.style.display = "block";
    Movie2.style.display = "none";
    return
})

//Slideshow 3

document.getElementById("prev3").addEventListener("click",function prevSlide2() {
    Movie2.style.display = "block";
    Movie3.style.display = "none";
    return
})
document.getElementById("next3").addEventListener("click",function nextSlide4() {
    Movie4.style.display = "block";
    Movie3.style.display = "none";
    return
})

//Slideshow 4
document.getElementById("prev4").addEventListener("click",function prevSlide3(){
    Movie3.style.display = "block";
    Movie4.style.display = "none";
    return
})
document.getElementById("next4").addEventListener("click",function nextSlide5() {
    Movie5.style.display = "block";
    Movie4.style.display = "none";
    return
})

//Slideshow 5
document.getElementById("prev5").addEventListener("click",function prevSlide4() {
    Movie4.style.display = "block";
    Movie5.style.display = "none";
})
document.getElementById("next5").addEventListener("click",function nextSlide6() {
    Movie6.style.display = "block";
    Movie5.style.display = "none";
})

//Slideshow 6
document.getElementById("prev6").addEventListener("click",function prevSlide5() {
    Movie5.style.display = "block";
    Movie6.style.display = "none";
})
document.getElementById("next6").addEventListener("click",function nextSlide7() {
    Movie7.style.display = "block";
    Movie6.style.display = "none";
})

//Slideshow 7
document.getElementById("prev7").addEventListener("click",function prevSlide6() {
    Movie5.style.display = "block";
    Movie7.style.display = "none";
})
document.getElementById("next7").addEventListener("click",function nextSlide8() {
    Movie8.style.display = "block";
    Movie7.style.display = "none";
})

//Slideshow 8
document.getElementById("prev8").addEventListener("click",function prevSlide7() {
    Movie7.style.display = "block";
    Movie8.style.display = "none";
})
document.getElementById("next8").addEventListener("click",function nextSlide9() {
    Movie9.style.display = "block";
    Movie8.style.display = "none";
})

//Slideshow 9
document.getElementById("prev9").addEventListener("click",function prevSlide8() {
    Movie7.style.display = "block";
    Movie9.style.display = "none";
})
document.getElementById("next9").addEventListener("click",function nextSlide10() {
    Movie1.style.display = "block";
    Movie9.style.display = "none";
})

//Menu
const Menu = document.getElementById("menu_nav")
const menu_show_hide = document.getElementById("menu")

function hide_show_menu () {
    if (menu_show_hide.style.display === "none") {
        menu_show_hide.style.display = "block"
    } else{
        menu_show_hide.style.display = "none"
    }
}

Menu.addEventListener("click", hide_show_menu)

const Sign_text_content = document.getElementById("menu_signin")
const Modal_SignIn_Form = document.getElementById("Modal_Form")

function Madal_show_hide () {
    if (Modal_SignIn_Form.style.display === "none") {
        Modal_SignIn_Form.style.display = "block"
    } else{
        Modal_SignIn_Form.style.display = "none"
    }
}

Sign_text_content.addEventListener("click", Madal_show_hide)

const faaaaa = document.getElementById("faaaaa")

function faaaaaaaaaa () {
    Modal_SignIn_Form.style.display = "none";
}

faaaaa.addEventListener("click", faaaaaaaaaa)

//Scroll to
const Scroll_About = document.getElementById("Scroll_About")
const Scroll_Origins = document.getElementById("Scroll_Origins")
const Scroll_Customes = document.getElementById("Scroll_Customes")
const Scroll_Movies = document.getElementById("Scroll_Movies")

Scroll_About.addEventListener("click", function(){
    window.scrollTo(0, 100)
})

Scroll_Origins.addEventListener("click", function(){
    window.scrollTo(0, 1100)
})

Scroll_Customes.addEventListener("click", function(){
    window.scrollTo(0, 2200)
})

Scroll_Movies.addEventListener("click", function(){
    window.scrollTo(0, 4600)
})

//Gallery--------------------
const Gal1 = document.getElementById("Gallery1")
const Gal2 = document.getElementById("Gallery2")
const Gal3 = document.getElementById("Gallery3")
const Gal4 = document.getElementById("Gallery4")
const Gal5 = document.getElementById("Gallery5")

//1
document.getElementById("PrevGal1").addEventListener("click", function(){
    Gal1.style.display = "none"
    Gal5.style.display = "flex"
})

document.getElementById("NextGal1").addEventListener("click", function(){
    Gal1.style.display = "none"
    Gal2.style.display = "flex"
})

//2
document.getElementById("PrevGal2").addEventListener("click", function(){
    Gal2.style.display = "none"
    Gal1.style.display = "flex"
})

document.getElementById("NextGal2").addEventListener("click", function(){
    Gal2.style.display = "none"
    Gal3.style.display = "flex"
})

//3
document.getElementById("PrevGal3").addEventListener("click", function(){
    Gal3.style.display = "none"
    Gal2.style.display = "flex"
})

document.getElementById("NextGal3").addEventListener("click", function(){
    Gal3.style.display = "none"
    Gal4.style.display = "flex"
})

//4
document.getElementById("PrevGal4").addEventListener("click", function(){
    Gal4.style.display = "none"
    Gal3.style.display = "flex"
})

document.getElementById("NextGal4").addEventListener("click", function(){
    Gal4.style.display = "none"
    Gal5.style.display = "flex"
})

//5
document.getElementById("PrevGal5").addEventListener("click", function(){
    Gal5.style.display = "none"
    Gal4.style.display = "flex"
})

document.getElementById("NextGal5").addEventListener("click", function(){
    Gal5.style.display = "none"
    Gal1.style.display = "flex"
})

//NavMobile
const Mo = document.getElementById("NaviMobile")
document.getElementById("hello").addEventListener("click", function(event){
    event.preventDefault()
    if (Mo.style.display === "none"){
        Mo.style.display = "block"
        return false
    } else {
        Mo.style.display = "none"
        return false
    }
})

const create_one = document.getElementById("create_one")

create_one.addEventListener("click", function () {
    Modal_SignIn_Form.style.display = "none"
    window.scrollTo(0, 5604)
})
