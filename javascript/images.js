const mobile_nav_container = document.getElementById('mobile_nav')

const mobile_nav = document.createElement('nav')
mobile_nav.style.display = 'block'

const home = document.createElement('a')
home.href = "./index.html"
home.innerHTML = "Home"
home.classList.add('mob_nav__link')
mobile_nav.appendChild(home)

const funny = document.createElement('a')
funny.href = "./images.html#funny"
funny.innerHTML = "Funny Images"
funny.classList.add('mob_nav__link')
mobile_nav.appendChild(funny)

const memes = document.createElement('a')
memes.href = "./images.html#memes"
memes.innerHTML = "Memes"
memes.classList.add('mob_nav__link')
mobile_nav.appendChild(memes)

const amazing = document.createElement('a')
amazing.href = "./images.html#amazing"
amazing.innerHTML = "Amazing"
amazing.classList.add('mob_nav__link')
mobile_nav.appendChild(amazing)

const add_contents = document.createElement('a')
add_contents.href = "./add_contents_page.html"
add_contents.innerHTML = "Add Contents"
add_contents.classList.add('mob_nav__link')
mobile_nav.appendChild(add_contents)

mobile_nav_container.appendChild(mobile_nav)

const searchIcon = document.querySelector(".search-icon")
const helpIcon = document.querySelector(".help-icon")
const clearIcon = document.querySelector(".clear-icon")
const menuIcon = document.querySelector(".menu-icon")
const searchBar = document.querySelector(".nav__input")

// control tne menu button
function displayLinks(){
    menuIcon.style.display = 'none'
    searchIcon.style.display = 'none'
    helpIcon.style.display = 'none'
    mobile_nav_container.style.display = 'block'
    clearIcon.style.display = 'block'
}

function displaySearchBar(){
    if (window.innerWidth < 616){
        menuIcon.style.display = 'none'
    }
    searchIcon.style.display = 'none'
    helpIcon.style.display = 'none'
    clearIcon.style.display = 'block'
    searchBar.style.display = 'block'
}

function restoreNavBar(){
    if (window.innerWidth < 700){
        menuIcon.style.display = 'block'
    }
    searchIcon.style.display = 'block'
    helpIcon.style.display = 'block'
    mobile_nav_container.style.display = 'none'
    clearIcon.style.display = 'none'
    searchBar.style.display = 'none'
}