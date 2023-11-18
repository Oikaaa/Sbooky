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

