const mobile_nav_container = document.getElementById('mobile_nav')
const mobile_nav = document.createElement('nav')
mobile_nav.style.display = 'block'

const home = document.createElement('a')
home.href = "./index.html"
home.innerHTML = "Home"
home.classList.add('mob_nav__link')
mobile_nav.appendChild(home)

const audiobooks = document.createElement('a')
audiobooks.href = "./audios.html#audiobooks"
audiobooks.innerHTML = "Audio Books"
audiobooks.classList.add('mob_nav__link')
mobile_nav.appendChild(audiobooks)

const musics = document.createElement('a')
musics.href = "./audios.html#musics"
musics.innerHTML = "Musics"
musics.classList.add('mob_nav__link')
mobile_nav.appendChild(musics)

const podcasts = document.createElement('a')
podcasts.href = "./audios.html#podcasts"
podcasts.innerHTML = "Podcasts"
podcasts.classList.add('mob_nav__link')
mobile_nav.appendChild(podcasts)

const classicals = document.createElement('a')
classicals.href = "./audios.html#classicals"
classicals.innerHTML = "Classicals"
classicals.classList.add('mob_nav__link')
mobile_nav.appendChild(classicals)

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