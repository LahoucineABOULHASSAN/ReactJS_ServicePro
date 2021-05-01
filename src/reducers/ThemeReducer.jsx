// menun bar code responsiveness
const display = () => {
  // get the DOM items
  const topNav = document.querySelector('.topnav')
  const responsiveBtn = document.querySelector('.responsive-btn')
  topNav.classList.toggle('responsive')
  responsiveBtn.classList.toggle('times')
  responsiveBtn.classList.toggle('bars')
}
const isActive = (event) => {
  const navLinks = document.querySelectorAll('.nav-item')
  navLinks.forEach((elem) => {
    if (elem === event.target.parentElement) {
      elem.classList.add('active')
    } else elem.classList.remove('active')
  })
}
export const navReducer = (state, action) => {
  switch (action.type) {
    case 'IS_ACTIVE':
      isActive(action.event)
      return state
    case 'DISPLAY_NAV':
      display()
      return state
    default:
      return state
  }
}
