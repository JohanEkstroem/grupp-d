export const checking = () => {
    console.log('navbar.js is loaded')
}
export const navbarResponsive = () => {
        const hamburger = document.querySelector('.hamburger');
        hamburger.addEventListener('click', () => {
            let navbar = document.querySelector('#navbar');
            if (navbar.className === "topnav") {
                navbar.className += " responsive";
            } else {
                navbar.className = "topnav"
            }
        })
    }
    // Any solutions??
    //trying with addeventlistener but it still doesnt work
    //i changed icon name to hamburger thought ev\NW

//seems like it doesnt work with onclick
//so try to use addEventListener

//alright i gave weird name for function, so hope u fix it and i will go now