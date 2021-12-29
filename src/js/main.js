import { carousel } from "./carousel";
import { renderCinemaCommercial, renderCinemaCommercialEvents, renderCinemaCommercialDiscount } from "./commercial";
import { navbarResponsive } from "./navbar";

window.onload = function() {
    carousel();
    navbarResponsive();
    renderCinemaCommercial();
    renderCinemaCommercialEvents();
    renderCinemaCommercialDiscount()
};