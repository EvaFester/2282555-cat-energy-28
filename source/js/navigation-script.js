let navMain = document.querySelector(`.navigation`)
let navToggle = document.querySelector(`.navigation__toggle`)

navMain.classList.remove(`navigation--nojs`)
navMain.classList.replace(`navigation--opened`, `navigation--closed`)

navToggle.addEventListener(`click`, () => {
  navMain.classList.toggle(`navigation--closed`)
  navMain.classList.toggle(`navigation--opened`)
})
