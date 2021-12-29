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

/* export const renderSnacksCommercial = () => {
    console.log('renderSnacksCommercial loaded')
    const snacksEventDescription = [
        "Dela på Facebook och få 10% rabatt på popcorn",
        "Betala med Mastercard och få 5% rabatt på läsk",
        "Rabattkod: jul2021"
    ]
    const snacksEventContainer = document.querySelector('.snacksEvent');
    const snacksEvent = createElement('div', 'testingtesting');
    const eventImg = createElement('img', 'cImg');
    eventImg.src = 'src/img/cinema1.jpg';
    snacksEventContainer.appendChild(snacksEvent);
    snacksEventContainer.appendChild(eventImg);
} */