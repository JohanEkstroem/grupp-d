import { carousel } from "./carousel";
import { renderCinemaCommercial, renderSnacksCommercial } from "./commercial";
import { navbarResponsive } from "./navbar";

window.onload = function() {
    carousel();
    navbarResponsive();
    renderCinemaCommercial();
    renderSnacksCommercial();
};