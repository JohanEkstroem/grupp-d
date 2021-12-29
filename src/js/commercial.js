export const renderCinemaCommercial = () => {
    console.log("cinema commercial loaded");
    //description for events
    const cEventDescription = [
        "Come and check out the christmas theme of our cinema!(will change all texts to swedish later)",
        "share the link of this event and get discount until this year!",
        "For the customers who wear a mask, we offer 20% discount!",
    ];
    for (let i = 1; i <= 3; i++) {
        const eventContainer = document.querySelector(".cinemaEvent");
        //create div, img and span in cinemaEvent
        const cinemaEvents = createElement("div", "cEvents right");
        const eventImg = createElement("img", "cImg");
        eventImg.src = `src/img/cinema${i}.jpg`;
        const emptyDiv = createElement("div", "emptyDiv");
        const eventDesc = createElement("span", "cEventDesc");
        //give description
        eventDesc.innerText = cEventDescription[i - 1];
        //append
        cinemaEvents.appendChild(eventImg);
        cinemaEvents.appendChild(emptyDiv);
        emptyDiv.appendChild(eventDesc);
        eventContainer.appendChild(cinemaEvents);
    }
};

//function to create element
function createElement(type, name) {
    const element = document.createElement(type);
    element.setAttribute("class", name);
    return element;
}

export const renderCinemaCommercialDiscount = () => {
    console.log('renderSnacksCommercial loaded')
    const EventDescriptionArray = [
        "Dela på Facebook och få 10% rabatt på popcorn",
        "Betala med Mastercard och få 5% rabatt på läsk",
        "Rabattkod: jul2021"
    ]
    for (let i = 1; i <= 3; i++) {
        const movieEvent = document.querySelector('.movieEvent');
        //create div, img and span in movieEvent
        const cinemaEvents = createElement('div', 'cEvents right');
        const eventImg = createElement('img', 'cImg');
        eventImg.src = `src/img/cinema-event${i}.jpg`;
        const emptyDiv = createElement('div', 'emptyDiv');
        const eventDesc = createElement('span', 'cEventDesc');
        //give description
        eventDesc.innerText = EventDescriptionArray[i - 1];
        //append
        cinemaEvents.appendChild(eventImg);
        cinemaEvents.appendChild(emptyDiv);
        emptyDiv.appendChild(eventDesc);
        movieEvent.appendChild(cinemaEvents);
    }
}


export const renderCinemaCommercialEvents = () => {
    console.log('renderSnacksCommercial loaded')
    const EventDescriptionArray = [
        "Under vissa utvalda dagar visar vi Pirates of the Caribbean och då använder vi pirat - tema i hela salongen.Yaarrr",
        "Under maj månad visar vi Star Wars och har därmed Star Wars-tema i hela salongen. May the fourth be with you.",
        "Under vissa utvalda dagar visar vi Rocky-serien och då använder vi Rocky-tema i hela salongen. Aaadriaaaaan"
    ]
    for (let i = 1; i <= 3; i++) {
        const movieEvent = document.querySelector('.movieEvent');
        //create div, img and span in movieEvent
        const cinemaEvents = createElement('div', 'cEvents right');
        const eventImg = createElement('img', 'cImg');
        eventImg.src = `src/img/cinema-event${i}.jpg`;
        const emptyDiv = createElement('div', 'emptyDiv');
        const eventDesc = createElement('span', 'cEventDesc');
        //give description
        eventDesc.innerText = EventDescriptionArray[i - 1];
        //append
        cinemaEvents.appendChild(eventImg);
        cinemaEvents.appendChild(emptyDiv);
        emptyDiv.appendChild(eventDesc);
        movieEvent.appendChild(cinemaEvents);
    }
}

// movieEvent got cinema events but cinemaEvents itself has no elements in there.
//if you see my codes up there rad 20 - 21 it has appended elements 
// you appeneded it in movie Events which should not be appended in there
// it should be in cEvent which is cinemaEvents
//that is why the img is directly underneath the movieEvent
//Yeah, i see that. 
// let's push css now
//no it was my code that is why it could be a bit hard for you to understand my structure :)
//dont think like that i think u did great job
//Thanks Haeju :D
//but i dont see any main css so maybe it is better to push this branch first and then pull main
//after that we can push css file
//I better do 'rabatter' first
//2nd part in commercials
// ah to DOM?
//yeah
//okay! then good luck :)
//it's hardcode now in index.html
//okie good idea to change all to js
// i repeat code now and that's not good or best practice. However, i just want to finish this course
//there will be way to change this all to one function but im suffering with pain right now so i better not to think so much
//sorry to hear. Get to bed and rest now :D
// okie! or maybe you can do it alone later
//when you are done, then can you take away css and css map and push all? idk maybe needs to push again to heroku??
//or is it automatically uploaded?
//heroku acts like github pages. Automatically updated
//ah okay good to hear :) so can u push styles later
//yes, just remove them from .gitignore?
//yes ! Nice!!
//okie good luck :)
//Thank you. Get well now :D
//tack XD bye bye
//bye