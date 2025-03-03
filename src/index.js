import './styles.css';
import loadHome from "./homepage";
import loadAbout from './about';
const homeSelect = document.getElementById("home-select");
const aboutSelect = document.getElementById("about-select");
const contactSelect = document.getElementById("contact-select");
document.addEventListener("DOMContentLoaded", function(){
})
homeSelect.addEventListener("click", function(){
    loadHome();
})
aboutSelect.addEventListener("click", function(){
    loadAbout();
})
