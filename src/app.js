const hamburger = document.getElementById('hamburger')

const navList = document.getElementById('nav-list')


function toggleClass() {
    navList.classList.toggle('show')
}

hamburger.addEventListener("click", toggleClass)